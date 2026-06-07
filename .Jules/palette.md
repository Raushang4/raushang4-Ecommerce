## 2026-06-06 - Modal Dialog Accessibility
**Learning:** In this application, generic custom modal components (`CustomModal.jsx`) built with Framer Motion lack standard semantic HTML (`<dialog>`) tags, making them inaccessible to screen readers and keyboard navigation by default.
**Action:** When creating or modifying custom modals, always enforce accessibility by adding `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby`, an `Escape` key close listener, and auto-focusing a close element upon opening.
