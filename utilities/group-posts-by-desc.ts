import { Post } from "@/types/types";

export function groupPostsByYear(posts: Post[]) {
  // Group posts by year
  const groupedPosts = posts.reduce((acc: { [key: number]: Post[] }, post) => {
    const year = new Date(post.frontmatter.publishedAt).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  // Convert the grouped object into an array and sort it by year in descending order
  const sortedPostsByYear = Object.keys(groupedPosts)
    .sort((a, b) => Number(b) - Number(a)) // Sort years in descending order
    .map((year) => ({
      year,
      posts: groupedPosts[Number(year)],
    }));

  return sortedPostsByYear;
}