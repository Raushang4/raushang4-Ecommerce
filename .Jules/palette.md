## 2024-05-09 - Fix Input ID Mismatch and Missing ARIA Labels
**Learning:** Found a critical accessibility pattern in `src/components/ContactSection.jsx` where `<label>` `htmlFor` attributes were pointing to the `name` of the input instead of its `id` (e.g., `htmlFor="name"` vs `id="input-name"`). Also found the global navigation mobile toggle lacked an `aria-label` entirely.
**Action:** Always verify `htmlFor` explicitly matches the `id` property, specifically watching out for the `input-` prefix pattern used in this codebase. Add dynamic `aria-label`s to custom icon-only toggle buttons.
