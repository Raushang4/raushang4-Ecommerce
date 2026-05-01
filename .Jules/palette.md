## 2025-02-26 - Form Label Accessibility Mismatch
**Learning:** Found a critical accessibility pattern in the codebase where `<label>` elements were using `htmlFor` attributes that pointed to the `name` of the input field rather than its `id`. This breaks screen reader label association and prevents users from clicking the label to focus the input.
**Action:** Always ensure that `htmlFor` on a `<label>` exactly matches the `id` attribute of its corresponding input element, not the `name` attribute.
