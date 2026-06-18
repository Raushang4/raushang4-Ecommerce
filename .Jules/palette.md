## 2026-06-11 - aria-controls on expandable menus
**Learning:** The mobile navigation sidebar drawer used `aria-expanded` but lacked `aria-controls`, leaving screen readers without programmatic context of which element the button toggles.
**Action:** Add `aria-controls` to any `button` or trigger element that controls an expandable region, mapping to the target region's `id`.
## 2026-06-11 - footer color contrast
**Learning:** Accessibility CI checks (Axe via Playwright) failed due to a low contrast ratio (1.84 vs 4.5:1 expected) on footer links () and copyright text (). The CSS used  on a  background.
**Action:** Replaced `#fff3` with `#ffffff99` (which acts as ~60% opacity white) to ensure proper contrast ratios.
## 2026-06-11 - footer color contrast
**Learning:** Accessibility CI checks (Axe via Playwright) failed due to a low contrast ratio (1.84 vs 4.5:1 expected) on footer links (.footer-policy a) and copyright text (.footer-copy). The CSS used #fff3 on a #111111 background.
**Action:** Replaced #fff3 with #ffffff99 (which acts as ~60% opacity white) to ensure proper contrast ratios.
