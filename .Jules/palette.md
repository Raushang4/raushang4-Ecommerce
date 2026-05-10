## 2024-05-10 - Form Label Accessibility Pattern
**Learning:** In this app's form components, `<label>` elements sometimes incorrectly use the `name` attribute value for `htmlFor` instead of the `id` attribute of the corresponding `<input>`. Inputs typically use an `input-` prefix (e.g., `id="input-name"`).
**Action:** Always verify that `htmlFor` exactly matches the `id` of the input element, especially when `name` and `id` differ.
