## 2024-05-30 - [Custom Modal Accessibility]
**Learning:** Custom modal components built with `framer-motion` lack native `dialog` accessibility features out of the box and cause screen reader and keyboard accessibility issues.
**Action:** When implementing custom modals without standard `<dialog>` tags, always ensure `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` are explicitly added. Further, focus must be manually managed using a `useRef` auto-focus on open, and an `Escape` key event listener needs to be attached to dismiss the modal cleanly.
