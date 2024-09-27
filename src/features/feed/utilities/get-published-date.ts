import {
  differenceInMinutes as calculateDifferenceInMinutes,
  differenceInHours as calculateDifferenceInHours,
  differenceInDays as calculateDifferenceInDays,
  format
} from 'date-fns';

export function getPublishedDate(publishedDate: Date): string {
  const currentDate = new Date();

  const differenceInMinutes = calculateDifferenceInMinutes(currentDate, publishedDate);
  const differenceInHours = calculateDifferenceInHours(currentDate, publishedDate);
  const differenceInDays = calculateDifferenceInDays(currentDate, publishedDate);

  if (differenceInMinutes < 1) {
    return 'Just now';
  }

  if (differenceInMinutes < 60) {
    return `${differenceInMinutes}m`;
  }

  if (differenceInHours < 24) {
    return `${differenceInHours}h`;
  }

  if (differenceInDays < 7) {
    return `${differenceInDays}d`;
  }

  return format(publishedDate, 'MM/dd/yyyy'); // (e.g. 01/01/2021)
}