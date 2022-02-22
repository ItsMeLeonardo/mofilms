/**
 * @description Debounce a function
 * @param {Function} func - Function to debounce
 * @param {Number} wait - time in ms
 * @returns {Function}
 */

export const debounce = (fn, delay = 400) => {
  if (!fn) throw new Error("Function is required");
  const timeoutId = null;
  return function () {
    if (timeoutId) clearTimeout(timeoutId);
    const args = arguments;
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};
