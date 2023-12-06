import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (
  amount: number,
  currency: string = "USD",
  locale: string = "en-US"
) => {
  return amount.toLocaleString(locale, {
    style: "currency",
    currency,
  });
};
