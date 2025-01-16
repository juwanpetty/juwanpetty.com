import { Post } from "@/features/blog/types";

export function sortAndGroupByYear(
  posts: Post[]
): { year: string; posts: Post[] }[] {
  const sorted = posts.sort((a, b) => {
    const dateDiff =
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime();
    return dateDiff !== 0
      ? dateDiff
      : a.frontmatter.title.localeCompare(b.frontmatter.title);
  });

  const grouped = Object.groupBy(sorted, (post) =>
    new Date(post.frontmatter.publishedAt).getFullYear().toString()
  ) as Record<string, Post[]>;

  return Object.entries(grouped).map(([year, groupedPosts]) => ({
    year,
    posts: groupedPosts,
  }));
}