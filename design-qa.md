# Projects page design QA

- Source visual truth: `design-qa/projects/source-template.png`
- Implementation screenshot: `design-qa/projects/implementation-desktop-final.png`
- Mobile screenshot: `design-qa/projects/implementation-mobile-final.png`
- Hover-menu screenshot: `design-qa/projects/implementation-hover-menu.png`
- Combined comparison: `design-qa/projects/comparison.png`
- Desktop viewport: 2048 x 1179 CSS pixels
- Source pixels: 2048 x 1179
- Implementation pixels: 2048 x 1179
- Density normalization: equal pixel dimensions; source device-pixel ratio is unknown
- State: light theme, Projects page, top of page

## Full-view comparison evidence

The implementation preserves the selected al-folio structure: fixed navigation, page heading and description, category rule, three-column project-card grid, image-first cards, shadows, and a second row for the fourth card. The narrower content width is intentional because it preserves this site's existing maximum-width setting rather than changing the layout of every page.

## Focused-region evidence

A separate focused crop was not required. The source and implementation are both 2048 x 1179, and card typography, image crops, borders, shadows, spacing, and descriptions are readable in the full-size captures.

## Required fidelity surfaces

- Fonts and typography: Existing al-folio typography and hierarchy are preserved. Project-card titles were reduced to 21.6 pixels for easier scanning while retaining clear hierarchy.
- Spacing and layout rhythm: Three equal cards render in the first row and the fourth begins the second row. Desktop and mobile have no horizontal overflow.
- Colors and visual tokens: Existing site background, text, theme accent, borders, and shadows are preserved.
- Image quality and asset fidelity: Four existing al-folio template photographs are used without synthetic replacements. These are intentionally temporary until final project images arrive.
- Copy and content: All four supplied project titles and descriptions render in the requested order.

## Interaction and responsive checks

- Projects navigation item is present and active.
- Hovering or focusing the Projects navigation item reveals four project links.
- Each dropdown link points to its corresponding detail page; Place & Mental Health was opened and verified.
- Clicking the main Projects navigation label still opens the four-card overview.
- Four project cards render.
- Clicking Sensing Place opens `/projects/sensing-place/` with the correct heading.
- Cards stack to one column at 390 x 844 without horizontal overflow.
- Browser console errors checked: none.

## Comparison history

- Initial mobile capture retained a prior scroll position and was rejected as invalid evidence.
- Recaptured desktop and mobile states from the top of the page; both passed layout and overflow checks.
- After adding the hover menu and reducing title size, captured the open-menu state and tested both a child destination and the main overview link.

## Findings

- No actionable P0, P1, or P2 differences remain.
- P3: Replace the four temporary template photographs when final project imagery is supplied.

final result: passed
