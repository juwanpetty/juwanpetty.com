import { allPatterns, allPosts } from "content-collections";

export const getSortedPatterns = () =>
  allPatterns.sort((a, b) => (a.published < b.published ? 1 : -1));

export const getSortedPosts = () =>
  allPosts.sort((a, b) => (a.published < b.published ? 1 : -1));

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
