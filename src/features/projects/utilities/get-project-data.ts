import path from "path";
import { readMDXFile, readDirectory, getSlugsFromDirectory } from "@/shared/utilities/get-mdx-data";

const PROJECT_DIRECTORY = path.join(process.cwd(), "src", "content", "projects");

export async function getProjectBySlug(slug: string) {
  return await readMDXFile(PROJECT_DIRECTORY, slug);
}

export async function getAllProjects() {
  const slugs = readDirectory(PROJECT_DIRECTORY);
  return await Promise.all(slugs.map((slug) => getProjectBySlug(slug)));
}

export function getAllProjectSlug() {
  return getSlugsFromDirectory(PROJECT_DIRECTORY);
}