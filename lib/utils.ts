import { CurrencyCode } from "./api";

export function formatPrice(value: number, currency: CurrencyCode) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  }).format(value);
}

export function formatNetWorth(value: number) {
  if (value > 1000) {
    return Math.floor(value / 1000).toString() + " Billion";
  } else {
    return value.toFixed(0).toString() + " Million";
  }
}
