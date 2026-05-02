
## 2024-05-18 - Detached Labels in Forms
**Learning:** Found a recurring pattern in the design system where `htmlFor` on labels did not match the `id` of the inputs (e.g., `htmlFor="name"` vs `id="input-name"`). Additionally, required fields lacked visual indicators (`*`) and screen reader attributes (`aria-required="true"`). This makes forms difficult for screen reader users and those looking for visual cues on required fields.
**Action:** Always ensure `htmlFor` matches the exact input `id`. For any input marked `required`, add a visual required indicator (`<span className="text-red-500">*</span>`) and enforce it for screen readers using `aria-required="true"`.
