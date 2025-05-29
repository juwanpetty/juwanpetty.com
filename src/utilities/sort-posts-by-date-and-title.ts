import { PostMetadata } from "@/utilities/mdx-utils";

export function sortPostsByDateAndTitle(
  posts: PostMetadata[],
  limit?: number
): PostMetadata[] {
  const sorted = [...posts].sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
