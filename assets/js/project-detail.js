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
