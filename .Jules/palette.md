## 2026-05-07 - Form Label htmlFor vs name attributes
**Learning:** In React components with custom IDs for inputs (like `id="input-name"` while `name="name"`), developers mistakenly bind `htmlFor` to the `name` attribute instead of the `id` attribute. This breaks screen reader associations and click-to-focus behavior.
**Action:** When reviewing or creating forms, ensure `<label>` `htmlFor` attributes exactly match the corresponding `<input>` `id` attributes, explicitly checking for prefix patterns like `input-`.
