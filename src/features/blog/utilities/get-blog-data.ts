import path from "path";
import { readMDXFile, readDirectory, getSlugsFromDirectory } from "@/shared/utilities/get-mdx-data";
import { Post } from "@/features/blog/types";

const BLOG_DIRECTORY = path.join(process.cwd(), "src", "content", "blog");

export async function getPostBySlug(slug: string) {
  return await readMDXFile(BLOG_DIRECTORY, slug);
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = readDirectory(BLOG_DIRECTORY);
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return posts as Post[];
}

export function getAllPostSlug() {
  return getSlugsFromDirectory(BLOG_DIRECTORY);
}