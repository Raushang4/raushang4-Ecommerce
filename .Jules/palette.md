## 2025-03-09 - Accessible Custom Modals
**Learning:** Custom modals implemented without standard HTML `<dialog>` elements often miss critical accessibility features, causing screen readers to ignore them and trapping keyboard users.
**Action:** Always add `role="dialog"`, `aria-modal="true"`, dynamic `aria-labelledby`/`aria-describedby`, an Escape key listener, and initial focus management (auto-focusing a close button or primary action) to custom modals.
