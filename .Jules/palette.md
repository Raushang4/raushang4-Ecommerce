## 2025-06-05 - Loading States for Async Buttons
**Learning:** Submit buttons managing async actions need not just a visual disabled state, but also the `aria-busy="true"` attribute to announce the processing state to screen reader users clearly. Using an SVG spinner along with text helps visual users but does not convey state to non-visual users implicitly.
**Action:** Always add `aria-busy={isPending}` alongside `disabled={isPending}` for any form submission button in React.
