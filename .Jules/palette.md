## 2024-02-12 - Form Label Association Pattern
**Learning:** In this app's components (like `ContactSection.jsx`), input IDs commonly use an `input-` prefix (e.g., `input-name`), which can cause mismatch errors with `<label htmlFor>` attributes that are accidentally set to the input's `name` attribute.
**Action:** When creating or reviewing forms in this app, ensure `<label>` `htmlFor` attributes exactly match the corresponding `<input>` `id` attributes (including the `input-` prefix) rather than the input's `name` attribute.
