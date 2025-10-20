import { allPosts, type Post } from "content-collections";

export const postsSortedByDate = allPosts.toSorted(
  (a, b) => b.date.getTime() - a.date.getTime()
);

export const postsSortedByTitle = allPosts.toSorted((a, b) =>
  a.title.localeCompare(b.title)
);

export const postsGroupedByYear = Object.entries(
  postsSortedByDate.reduce<Record<number, Post[]>>((groups, post) => {
    const year = post.date.getFullYear();

    if (!groups[year]) {
      groups[year] = [];
    }

    groups[year].push(post);

    return groups;
  }, {})
)
  .map(([year, posts]) => ({
    year: Number(year),
    posts,
  }))
  .sort((a, b) => b.year - a.year);
