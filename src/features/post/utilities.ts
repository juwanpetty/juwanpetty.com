import type { Post } from "@/features/post/types";
import path from "path";
import { readMDXFile, readDirectory, getSlugsFromDirectory } from "@/utilities/get-mdx-data";

const BLOG_DIRECTORY = path.join(process.cwd(), "src", "content", "blog");

export async function getPostBySlug(
  slug: string,
  components: Record<string, React.ComponentType<React.PropsWithChildren<unknown>>> = {}
) {
  return await readMDXFile(BLOG_DIRECTORY, slug, components);
}

export async function getAllPosts(components: Record<string, React.ComponentType<React.PropsWithChildren<unknown>>> = {}): Promise<Post[]> {
  const slugs = readDirectory(BLOG_DIRECTORY);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug, components)));
  return posts as Post[];
}

export function getAllPostSlug() {
  return getSlugsFromDirectory(BLOG_DIRECTORY);
}

// This function sorts posts by date and title
// if the date is the same
export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedAt);
    const dateB = new Date(b.frontmatter.publishedAt);

    const dateDiff =
      (isNaN(dateB.getTime()) ? 0 : dateB.getTime()) -
      (isNaN(dateA.getTime()) ? 0 : dateA.getTime());
    return dateDiff !== 0
      ? dateDiff
      : a.frontmatter.title.localeCompare(b.frontmatter.title);
  });
}

// This function groups posts by year
// and returns an array of objects with the year and the posts
// for that year
export function groupPostsByYear(posts: Post[]) {
  const grouped = Object.groupBy(posts, (post) =>
    new Date(post.frontmatter.publishedAt).getFullYear().toString()
  ) as Record<string, Post[]>;

  return Object.entries(grouped)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Sort years in descending order
    .map(([year, groupedPosts]) => ({
      year,
      posts: groupedPosts,
    }));
}

export function sortAndGroupPostsByYear(posts: Post[]) {
  return groupPostsByYear(sortPosts(posts));
}

export function getAdjacentPosts(
  posts: Post[],
  currentSlug: string
): { prevPost: Post | null; nextPost: Post | null } {
  const sortedPosts = sortPosts(posts);

  // Find the index of the current post
  const index = sortedPosts.findIndex((post) => post.slug === currentSlug);
  if (index === -1) {
    return { prevPost: null, nextPost: null };
  }

  // Note: In descending order, "previous" is the next index, "next" is the prev index
  const prevPost = sortedPosts[index + 1] || null;
  const nextPost = sortedPosts[index - 1] || null;

  return { prevPost, nextPost };
}

export function getPostsByTopic(posts: Post[], topic: string) {
  return posts.filter(post => post.frontmatter.tags.includes(topic));
}