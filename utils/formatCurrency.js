export const formatCurrency = (quantity, lang = "en-US", currency = "USD") => {
  const money = typeof quantity === "string" ? Number(quantity) : quantity;
  const intl = new Intl.NumberFormat(lang, {
    currency,
    style: "currency",
    maximumFractionDigits: 0,
  });

  return intl.format(money);
};
