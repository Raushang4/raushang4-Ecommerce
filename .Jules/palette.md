## 2024-05-11 - Form Label Accessibility Mismatch
**Learning:** When creating or reviewing forms in this app, `<label>` `htmlFor` attributes were incorrectly matching the input's `name` attribute instead of the corresponding `<input>` `id` attributes (which typically use an `input-` prefix like `input-name`).
**Action:** Ensure `<label>` `htmlFor` attributes exactly match the corresponding `<input>` `id` attributes to guarantee proper screen reader and keyboard accessibility support.
