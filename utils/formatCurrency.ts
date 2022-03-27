export const formatCurrency = (
  quantity: number | string = 0,
  lang = "en-US",
  currency = "USD"
) => {
  const money: number =
    typeof quantity === "string" ? Number(quantity) : quantity;
  const intl = new Intl.NumberFormat(lang, {
    currency,
    style: "currency",
    maximumFractionDigits: 0,
  });

  return intl.format(money);
};
