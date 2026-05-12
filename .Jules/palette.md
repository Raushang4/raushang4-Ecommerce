## 2024-05-12 - Form Label htmlFor Associations
**Learning:** In this application, input fields use a prefixed ID pattern (e.g., `input-name`). Labels must use `htmlFor` matching the ID (`input-name`), not the input `name` attribute.
**Action:** When creating or reviewing forms in this app, ensure `<label>` `htmlFor` attributes exactly match the corresponding `<input>` `id` attributes (which typically use an `input-` prefix).
