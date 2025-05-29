import { type PostMetadata } from "@/utilities/mdx-utils";

interface GroupedPosts {
  year: string;
  posts: PostMetadata[];
}

export function sortPostsByDateThenTitle(
  posts: PostMetadata[]
): PostMetadata[] {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });
}

export function groupPostsByPublishedYear(
  posts: PostMetadata[]
): GroupedPosts[] {
  const grouped: Record<string, PostMetadata[]> = {};

  for (const post of posts) {
    const year = new Date(post.datePublished).getFullYear().toString();
    grouped[year] = grouped[year] || [];
    grouped[year].push(post);
  }

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, posts]) => ({ year, posts }));
}

export function getPostsOrganizedByYear(posts: PostMetadata[]): GroupedPosts[] {
  const sortedPosts = sortPostsByDateThenTitle(posts);
  return groupPostsByPublishedYear(sortedPosts);
}
