import { format } from "date-fns";

export function formatDate(date: string, formatString: string = 'MMMM do, yyyy'): string {
  return format(new Date(date), formatString);
}