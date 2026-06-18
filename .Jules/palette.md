## 2026-05-29 - Modal Accessibility
**Learning:** Custom modals built without native `<dialog>` tags require explicit `role="dialog"`, `aria-modal="true"`, and connection to their internal text content using `aria-labelledby` and `aria-describedby` to be functional for screen-reader users, avoiding empty dialog experiences.
**Action:** Always ensure any `motion.div` overlay or similar structure used as a modal in this codebase includes complete standard dialog ARIA attributes mapping to its dynamic ID prefix.
