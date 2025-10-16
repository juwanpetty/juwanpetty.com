import { allPosts } from "content-collections";

export const postsSortedByDate = allPosts.toSorted(
  (a, b) => b.date.getTime() - a.date.getTime()
);
