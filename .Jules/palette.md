## 2024-05-18 - Form Label Accessibility
**Learning:** Found that `htmlFor` properties on form labels were tied to names rather than IDs. When the IDs don't match, screen readers fail to associate the labels with inputs.
**Action:** When creating forms, ensure that `htmlFor` on labels perfectly matches the `id` of their respective inputs.
