import { Post } from "@/features/post/types";

export function getPostTopicsAndCount(posts: Post[]) {
  const topicMap = new Map<string, number>();

  posts.forEach(post => {
    const uniqueTags = new Set(post.frontmatter.tags);
    uniqueTags.forEach(tag => {
      topicMap.set(tag, (topicMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(topicMap).map(([name, count]) => ({ name, count }));
}

export function getAllTopicSlugs(posts: Post[]) {
  const topicSet = new Set<string>();

  posts.forEach(post => {
    const uniqueTags = new Set(post.frontmatter.tags);
    uniqueTags.forEach(tag => {
      topicSet.add(tag);
    });
  });

  return Array.from(topicSet).map(slug => ({ slug }));
}

export function createTopicSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens
}

// function capitalizeTagName(tagName: string): string {
//   return tagName
//     .split(/[-\s]+/) // Split on hyphens or spaces
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
//     .join(" ");
// }