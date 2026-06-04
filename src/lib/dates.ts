import { format } from "date-fns";

export const SHORTHAND_DATE_FORMAT = "LLLL yyyy";
export const FULL_DATE_FORMAT = "MMMM d, yyyy";

export function parseDate(dateString: string): Date {
  return new Date(`${dateString}T12:00:00`);
}

export function formatDate(
  date: Date,
  formatString: string = SHORTHAND_DATE_FORMAT
): string {
  return format(date, formatString);
}
