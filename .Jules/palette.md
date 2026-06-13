## 2026-06-13 - [Custom Modal Keyboard Focus Lifecycle Management]
**Learning:** [When attaching focus timeouts to elements inside conditionally rendered Framer Motion modals, standard `setTimeout` can leak if the component unmounts quickly, causing errors or misdirected focus.]
**Action:** [Always manage `setTimeout` lifecycles via a scoped `let timer = setTimeout()` and clean it up with `clearTimeout(timer)` in the `useEffect` unmount return, ensuring memory safety for transient UI components.]
