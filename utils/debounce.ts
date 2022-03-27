type debounceFunction = (...args: any[]) => any;

export const debounce = (fn: debounceFunction, delay = 400) => {
  if (!fn) throw new Error("Function is required");
  let timeoutId = null;
  return function () {
    if (timeoutId) clearTimeout(timeoutId);
    const args = arguments;
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
};
