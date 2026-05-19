
## 2024-05-19 - Form validation accessibility
**Learning:** Screen readers often miss dynamic form error messages if they are not explicitly linked to the input fields. Just showing an error message visibly or adding a red border isn't enough.
**Action:** When adding form validation, always add conditional `aria-describedby` (pointing to the error element's dynamic ID, only when the error exists) and toggle `aria-invalid` on the input fields.
