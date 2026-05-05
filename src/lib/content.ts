import { allJobs, allExperiments, allPosts } from "content-collections";

export const getSortedExperiments = () =>
  allExperiments.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });

export const getSortedPosts = () =>
  allPosts.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });

export const getSortedJobs = () =>
  allJobs.sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });

export function getAdjacentItems<T extends { _meta: { path: string } }>(
  items: T[],
  slug: string
) {
  const index = items.findIndex((item) => item._meta.path === slug);
  return {
    previous: items[index - 1] || null,
    next: items[index + 1] || null,
  };
}
