
## 2026-05-16 - [Form Validation Accessibility with Framer Motion]
**Learning:** When using Framer Motion's `AnimatePresence` for form error messages, simply toggling an error class on an input is insufficient for screen readers. They need explicitly linked `aria-describedby` and `aria-invalid` attributes. Setting `aria-describedby` blindly can lead to referencing non-existent IDs when the element hasn't mounted yet or is removed.
**Action:** Always conditionally apply `aria-describedby={errors[field.name] ? \`error-${field.name}\` : undefined}` to ensure it is only active when the error element (and its ID) actually exist in the DOM, maintaining perfect sync with conditional rendering libraries.
