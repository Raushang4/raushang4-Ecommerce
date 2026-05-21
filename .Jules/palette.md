
## 2024-05-18 - Accessibility on Custom Framer Motion Modals
**Learning:** Custom non-native modals (like the ones built with `framer-motion`) heavily require correct ARIA states to function correctly for screen readers. Simply hiding/showing overlay is not sufficient.
**Action:** When implementing custom modals without standard HTML `<dialog>` tags, ensure you append `role="dialog"`, `aria-modal="true"`, correct ID linking using `aria-labelledby`/`aria-describedby`, add an `Escape` key event listener mapping to unmount, and initialize auto-focus management targeting immediate dismiss actions (like a close button). Ensure focused elements have prominent `focus-visible` states.
