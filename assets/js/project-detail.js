(() => {
  const root = document.querySelector('.physical-project');
  if (!root) return;
  const links = [...root.querySelectorAll('.toc a')];
  const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
  function update() {
    const current = sections.filter(section => section.getBoundingClientRect().top <= 140).pop() || sections[0];
    links.forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('on', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  let pending = false;
  window.addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(() => { update(); pending = false; }); }
  }, { passive: true });
  update();
})();

// Keep full-resolution sources and make their detail accessible at native size.
(() => {
  const root = document.querySelector('.physical-project');
  if (!root) return;
  const viewer = document.createElement('dialog');
  viewer.className = 'project-figure-viewer';
  viewer.setAttribute('aria-label', 'Full-resolution figure');
  viewer.innerHTML = `
    <div class="figure-viewer-toolbar">
      <span class="figure-viewer-label">Full-resolution figure</span>
      <button type="button" data-size aria-pressed="false">Original size</button>
      <a data-download download>Download image</a>
      <button type="button" data-close aria-label="Close figure viewer">Close</button>
    </div>
    <div class="figure-viewer-scroll"><img alt=""></div>`;
  document.body.append(viewer);
  const img = viewer.querySelector('img');
  const scroll = viewer.querySelector('.figure-viewer-scroll');
  const size = viewer.querySelector('[data-size]');
  const download = viewer.querySelector('[data-download]');
  const setSize = (native) => {
    viewer.classList.toggle('original-size', native);
    img.style.width = native ? `${img.naturalWidth}px` : '';
    size.textContent = native ? 'Fit to window' : 'Original size';
    size.setAttribute('aria-pressed', String(native));
    scroll.scrollTop = scroll.scrollLeft = 0;
  };
  root.querySelectorAll('.figure-link').forEach(link => {
    link.title = 'View full-resolution figure';
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      img.alt = link.querySelector('img').alt;
      img.src = link.href;
      download.href = link.href;
      setSize(false);
      viewer.showModal();
    });
  });
  size.addEventListener('click', () => setSize(!viewer.classList.contains('original-size')));
  viewer.querySelector('[data-close]').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
})();
