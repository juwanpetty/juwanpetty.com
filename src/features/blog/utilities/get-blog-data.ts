import path from "path";
import { readMDXFile, readDirectory, getSlugsFromDirectory } from "@/shared/utilities/get-mdx-data";

const BLOG_DIRECTORY = path.join(process.cwd(), "src", "content", "blog");

export async function getPostBySlug(slug: string) {
  return await readMDXFile(BLOG_DIRECTORY, slug);
}

export async function getAllPosts() {
  const slugs = readDirectory(BLOG_DIRECTORY);
  return await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
}

export function getAllPostSlug() {
  return getSlugsFromDirectory(BLOG_DIRECTORY);
}