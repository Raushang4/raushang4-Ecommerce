
## 2024-06-08 - [CustomModal Focus & ARIA Optimization]
**Learning:** Generic modals without standard HTML `<dialog>` tags require manual focus management (initial focus) and specific ARIA roles (`role="dialog"`, `aria-modal="true"`) to remain accessible. Additionally, adding Escape key listeners is essential for keyboard navigability.
**Action:** When implementing custom modals in this project, explicitly map focus to an interactive element upon opening and attach an Escape key event listener that is properly cleaned up on unmount.
