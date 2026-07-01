import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatReviewCount(value: number) {
  return new Intl.NumberFormat("en-GB").format(value);
}
