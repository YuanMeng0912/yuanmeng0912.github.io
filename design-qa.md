# About-page project-link design QA

- Source visual truth: `/var/folders/bq/g6ryq15j5sz6xd52h8l1f2kr0000gn/T/codex-clipboard-6f76216f-e879-4f87-91e4-9e03550937b1.png`
- Implementation screenshot: `design-qa/about/project-links-bold-viewport.png`
- Source pixels: 1338 x 666
- Implementation pixels: 1280 x 720
- Implementation CSS viewport: 1280 x 720
- Density normalization: both captures are standard-density screenshots. The source is a focused crop while the implementation is the full About-page viewport, so typography and link treatment were compared directly rather than by page geometry.
- State: light theme, About page, top of page

## Full-view comparison evidence

The implementation preserves the existing About-page composition, portrait, typography, paragraph wrapping, and teal project-link color. The four project names now form a visibly stronger hierarchy than the surrounding prose, matching the user's requested emphasis without changing the page structure.

## Focused-region evidence

A separate focused crop was not needed because all four linked project names and their surrounding sentences are clearly readable in the 1280 x 720 implementation screenshot. The source crop and implementation viewport were opened together for comparison.

## Required fidelity surfaces

- Fonts and typography: the existing sans-serif family, sizes, and line height are unchanged. Project links use a computed weight of 700 while surrounding copy remains regular weight.
- Spacing and layout rhythm: no spacing, dimensions, or wrapping rules were changed.
- Colors and visual tokens: the established teal link color remains `rgb(59, 151, 151)`.
- Image quality and asset fidelity: the profile photograph and all existing assets are unchanged.
- Copy and content: all four original project names, destinations, and surrounding sentences are unchanged.

## Interaction and responsive checks

- All four project links remain present and retain their original destinations.
- Computed font weight for every project link is 700.
- Browser console errors checked: none.

## Comparison history

- Initial Markdown bold markup rendered the links at weight 500 because the site's link rule overrode the inherited strong weight.
- Added a scoped `.about-copy strong a` rule with weight 700.
- Post-fix browser inspection confirmed all four links render at weight 700 with no console errors.

## Findings

- No actionable P0, P1, or P2 differences remain.

final result: passed


## Project 1 implementation verification — 2026-09-03

Source: `/Users/yuanmeng/Library/CloudStorage/Dropbox/Academic_improvement/Application_Position/Application_universities/Website design/01_sensing-place-physical/Mockup.html`.
Implementation: `http://localhost:8080/projects/sensing-place-physical/`.

Evidence: `/tmp/project1-desktop.png`, `/tmp/project1-mobile.png`, `/tmp/project1-dark.png`.
Viewports: desktop 1440 × 1000; mobile 390 × 844 CSS pixels. Captures use corresponding viewport pixel dimensions. Light and dark themes inspected.

Verification completed:
- All 13 supplied figures render; original images can be opened at full resolution.
- Sidebar anchors and current-section highlighting work; target headings clear the fixed site navigation.
- Five DOI links match local paper metadata; all five PDF and five BibTeX files exist in the built output. External DOI resolution not tested.
- Desktop and mobile have no horizontal overflow. Figure pairs stack on mobile.
- Typography uses Roboto and Roboto Slab with the reference sizes. Scoped overrides prevent Bootstrap’s `.lead` class from enlarging study text. Monospaced labels use the available monospace fallback when Roboto Mono is absent.
- Layout uses the supplied 198 px sidebar, 44 px gap, figure plates, teal accents, and featured-study styling. Existing site navigation is retained as requested.
- Dark theme retains white scientific figure plates and uses readable foreground colors.
- Text comparison confirms original prose, titles, captions, and labels remain unchanged except 32,367 → 22,022 in the hero caption. Citation controls are labeled Cite (BibTeX).
- No browser console errors observed. Jekyll builds successfully; git diff whitespace check passes.

Iteration history:
1. Fixed malformed figure link Liquid markup after empty figures appeared; subsequent browser check found all 13 figures loaded.
2. Fixed inherited Bootstrap lead text sizing; subsequent desktop screenshot confirmed 16 px study prose and mobile screenshot confirmed readable wrapping.

Reference-comparison limitation: browser security policy rejected opening the local `file://` mockup. No alternate browser or workaround was attempted. Full-view and focused source-versus-implementation screenshot comparisons could not be completed; source pixel dimensions are unavailable. Implementation screenshots were inspected against the supplied HTML structure and CSS, but this does not satisfy the Image-to-Code skill’s paired visual-comparison gate.

final result: blocked
Blocker: reference screenshot comparison unavailable. Local implementation and interaction checks are complete; no claim of fully verified visual fidelity.

## Project 2 — 2026-09-03

Source: Website design/02_sensing-place-function/Mockup.html. Implementation: http://localhost:8080/projects/sensing-place-function/.
Evidence: /tmp/project2-desktop.png (1440 × 1000), /tmp/project2-mobile.png (390 × 844). Light theme, desktop and mobile CSS viewports matched to screenshot sizes.

All six study anchors and active-section indicators work. All 16 original images loaded in the browser; file hashes match the supplied JPEGs. The full-resolution viewer displays the tested 2400 px figure at 2400 px when Original size is selected. All six PDF and BibTeX targets exist. DOI values match repository references; external resolver navigation not tested. Four corresponding-author names are bold with asterisks. Text comparison confirms no changes to supplied prose or captions. Browser console has no errors; no horizontal overflow at 390 px. Inline paired-image ratios preserved on desktop and overridden to one column on mobile. Scoped additions leave Project 1 styling unchanged. Roboto / Roboto Slab, spacing, teal accents, original assets and exact copy checked against reference HTML/CSS. Paired source screenshots remain unavailable because local reference file navigation was previously rejected by browser security policy; no workaround attempted.

Content concern left unchanged for the user: Ecological Indicators describes six landscape element types, whereas the draft lists four. Headline numeric results match the paper abstracts/tables.

final result: blocked
Blocker: full source-versus-implementation screenshot comparison unavailable. Implementation and functional verification completed, but exact visual fidelity is not claimed.

## Project 3 — 2026-09-04

Source: Website design/03_covid-mortality/Mockup.html. Implementation: http://localhost:8080/projects/place-covid-19-mortality/.

Implemented five studies and the new five-entry Selected Papers section. Desktop and 390 × 844 mobile screenshots inspected; mobile cards stack and no horizontal overflow occurs. All in-page targets resolve. All 13 unique JPEGs are byte-identical to the supplied originals and their generated-site copies. PDF and BibTeX assets exist for all five studies; DOI values match bibliography metadata. Selected-paper figure opens the full-resolution dialog, and Original size toggles to Fit to window with the original 1903 × 1066 image loaded. No browser console errors observed. Existing navigation retained and mockup-only chrome/notes omitted. Author names are bold; these five studies identify Meng as first author. Prose retained.

Numerical spot checks match paper abstracts: AAG relative-risk ranges; Cities sample sizes and usage decline; IJERPH percentage values. Content concern left unchanged: −26.52% to 373.60% describes the percentage difference between excess all-cause mortality and recorded COVID-19 mortality, rather than the excess-mortality rate itself.

final result: blocked
Blocker: paired source screenshot comparison remains unavailable following the earlier browser policy rejection of local reference navigation. Implementation visual and functional checks passed; exact visual fidelity is not claimed.
