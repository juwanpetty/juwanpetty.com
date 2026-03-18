import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SHORTHAND_DATE_FORMAT = "LLLL yyyy";
export const FULL_DATE_FORMAT = "MMMM d, yyyy";

export function formatDate(
  date: string,
  formatString: string = SHORTHAND_DATE_FORMAT
): string {
  return format(new Date(date), formatString);
}

export function generateId(text: ReactNode) {
  return text
    ?.toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
