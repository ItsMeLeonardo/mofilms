type language = {
  lang?: "en" | "es" | "fr" | "de" | "it" | "pt" | "ru" | "zh";
};

export const formatDate = (
  date: string | Date = "",
  options: Intl.DateTimeFormatOptions & language = {}
): string => {
  let dateToFormat: Date;
  if (typeof date === "string") {
    if (date.trim().length === 0) return "N/A";
    dateToFormat = new Date(date);
  } else {
    dateToFormat = date;
  }

  const intl = new Intl.DateTimeFormat(options.lang, options);
  return intl.format(dateToFormat);
};
