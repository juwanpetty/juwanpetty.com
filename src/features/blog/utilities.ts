import { Blog } from "@/features/blog/types";
import { getSlugsFromDirectory } from "@/lib/mdx-utils";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/blog");

export async function getBlog(slug: string) {
  const { default: Blog, metadata } = await import(
    `@/content/blog/${slug}.mdx`
  );

  return {
    slug,
    content: Blog,
    ...metadata,
  } as Blog;
}

export async function getBlogs() {
  const slugs = await getSlugsFromDirectory(contentDir);

  const blogs = await Promise.all(slugs.map(async ({ slug }) => getBlog(slug)));

  return [...blogs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return a.title.localeCompare(b.title);
    }

    return dateB - dateA;
  });
}

export async function getBlogSlugs() {
  return getSlugsFromDirectory(contentDir);
}
