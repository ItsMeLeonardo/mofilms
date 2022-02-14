export const addZeroToNumber = (number = 0, digits = 2) => {
  if (Number(number) === NaN) return 0;

  return ("0".repeat(digits) + number).slice(-digits);
};
