const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
