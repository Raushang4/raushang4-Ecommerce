## 2026-06-12 - Form Validation Accessibility
**Learning:** React form validation errors rendered dynamically (e.g., via Framer Motion) must be programmatically linked to their corresponding input fields using `aria-invalid` and `aria-describedby` to ensure screen readers announce the specific error message when navigating through the form.
**Action:** Always add `aria-invalid={!!errors[field]}` and `aria-describedby={errors[field] ? `error-${field}` : undefined}` to inputs, mapping to an explicit `id` on the error message span.
