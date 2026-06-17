## 2024-11-20 - CustomModal ARIA & Keyboard Accessibility
**Learning:** Custom modals implemented outside of standard `<dialog>` elements often lack inherent accessibility. In this Next.js app, `CustomModal` was completely missing screen-reader context and keyboard focus management.
**Action:** When creating or editing custom modal components, always verify they include `role="dialog"`, `aria-modal="true"`, explicit `aria-labelledby`/`aria-describedby` references mapping to unique IDs, an `Escape` key close listener, and logic to auto-focus a primary interactive element upon opening.
## 2024-11-20 - E2E Testing without Secrets
**Learning:** Server actions performing API integrations will cause End-to-End browser tests (like Playwright) to fail inside standard GitHub Actions runners if the credentials are excluded for security reasons.
**Action:** When creating tests or features relying on third-party credentials (like `GoogleSpreadsheet`), always add a credential-check bypass inside the Server Action to return a mocked "success" payload during test environments where `.env` secrets are missing.
