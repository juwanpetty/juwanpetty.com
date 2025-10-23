import { blog } from "@/lib/source";

const allPosts = blog.getPages();

export const postsSortedByDate = allPosts.toSorted(
  (a, b) => b.data.date.getTime() - a.data.date.getTime()
);

export const postsSortedByTitle = allPosts.toSorted((a, b) =>
  a.data.title.localeCompare(b.data.title)
);

// This is a band-aid fix
type Post = (typeof allPosts)[number];

export const postsGroupedByYear = Object.entries(
  postsSortedByDate.reduce<Record<number, Post[]>>((groups, post) => {
    const year = post.data.date.getFullYear();

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
