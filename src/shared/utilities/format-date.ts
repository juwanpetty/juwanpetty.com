import { format } from "date-fns";

export function formatDate(date: string, formatOption: string = 'MMMM do, yyyy'): string {
  return format(new Date(date), formatOption);
}