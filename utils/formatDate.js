/**
 * @param {Date | String} date to format
 * @param {Intl.DateTimeFormatOptions} options {lang, dateStyle = full | long | medium | short}
 * @returns {String} formatted date
 */
export const formatDate = (
  date,
  { lang = "en-US", dateStyle = "full" } = {}
) => {
  const dateToFormat = typeof date === "string" ? new Date(date) : date;

  const intl = new Intl.DateTimeFormat(lang, { dateStyle });
  return intl.format(dateToFormat);
};
