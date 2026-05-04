## 2026-05-04 - Disconnected Form Labels Pattern
**Learning:** Found a specific accessibility issue pattern in `ContactSection.jsx` where form labels were disconnected from their inputs because the `htmlFor` attribute matched the input's `name` (e.g., `htmlFor="name"`) instead of its `id` which was prefixed (e.g., `id="input-name"`). This breaks click-to-focus and screen reader association.
**Action:** When creating or reviewing forms in this app, explicitly verify that `htmlFor` attributes exactly match the `id` attributes of inputs, especially when prefixes like `input-` are used.
