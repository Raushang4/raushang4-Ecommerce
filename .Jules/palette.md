## 2026-06-11 - aria-controls on expandable menus
**Learning:** The mobile navigation sidebar drawer used `aria-expanded` but lacked `aria-controls`, leaving screen readers without programmatic context of which element the button toggles.
**Action:** Add `aria-controls` to any `button` or trigger element that controls an expandable region, mapping to the target region's `id`.
