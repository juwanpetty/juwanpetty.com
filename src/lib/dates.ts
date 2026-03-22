import { format } from "date-fns";

export const SHORTHAND_DATE_FORMAT = "LLLL yyyy";
export const FULL_DATE_FORMAT = "MMMM d, yyyy";

export function formatDate(
  date: string,
  formatString: string = SHORTHAND_DATE_FORMAT
): string {
  return format(new Date(date), formatString);
}
