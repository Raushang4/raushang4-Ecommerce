## 2024-05-25 - Form Validation Accessibility
**Learning:** When implementing form validation, dynamically applying `aria-invalid` based on error presence and selectively rendering `aria-describedby` ensures screen readers announce errors correctly without pointing to non-existent elements.
**Action:** Always use conditional checks (e.g. `aria-describedby={errors[field.name] ? \`error-${field.name}\` : undefined}`) when linking inputs to error messages in custom forms.
