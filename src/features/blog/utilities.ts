import { Blog } from "@/features/blog/types";
import { format } from "date-fns";
import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "src/features/blog/content");

export async function getBlog(slug: string): Promise<Blog> {
  const { default: Blog, metadata } = await import(
    `@/features/blog/content/${slug}.mdx`
  );

  return {
    slug,
    content: Blog,
    ...metadata,
  };
}

export async function getBlogs() {
  const slugs = await getBlogSlugs();

  const blogs = await Promise.all(slugs.map(async ({ slug }) => getBlog(slug)));

  // Sort by date (newest first)
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogSlugs(): Promise<{ slug: string }[]> {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

export function formatDate(
  date: string,
  formatString: string = "MMM d, yyyy"
): string {
  return format(new Date(date), formatString);
}
