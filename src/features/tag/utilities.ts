import { Post } from "@/features/post/types";

export function getPostTagsAndCount(posts: Post[]) {
  const tagMap = new Map<string, number>();

  posts.forEach(post => {
    const uniqueTags = new Set(post.frontmatter.tags);
    uniqueTags.forEach(tag => {
      tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
    });
  });

  return Array.from(tagMap).map(([name, count]) => ({ name, count }));
}

export function getAllTagSlugs(posts: Post[]) {
  const tagSet = new Set<string>();

  posts.forEach(post => {
    const uniqueTags = new Set(post.frontmatter.tags);
    uniqueTags.forEach(tag => {
      tagSet.add(tag);
    });
  });

  return Array.from(tagSet).map(slug => ({ slug }));
}

export function createTagSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Trim leading or trailing hyphens
}

export function capitalizeTagName(tag: string) {
  return tag
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}