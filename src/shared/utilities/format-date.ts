import { format } from "date-fns";

export function formatDate(date: string, formatOption?: string): string {
  return format(new Date(date), formatOption || 'MMMM do, yyyy');
}