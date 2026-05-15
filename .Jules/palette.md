## 2024-05-15 - Dynamic `aria-describedby` in Framer Motion Forms
**Learning:** When using Framer Motion's `<AnimatePresence>` for form error messages, simply applying `aria-describedby` with an ID string creates an accessibility issue if the corresponding error element isn't in the DOM yet (which is standard behavior for `AnimatePresence`).
**Action:** Always make `aria-describedby` conditional (`errors[field.name] ? 'id' : undefined`) to match the DOM presence of the error element, preventing screen readers from looking for missing descriptions.
