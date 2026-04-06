/**
 * Scrolls to an element with a fixed header offset.
 * Used as the `scroll` prop for react-router-hash-link's <HashLink>.
 *
 * @param {Element} el - The target DOM element to scroll to.
 */
export const scrollWithOffset = (el) => {
  const yOffset = -80; // adjust if header height changes
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
