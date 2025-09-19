import { promises as fs } from "fs";
import path from "path";

export async function getSlugsFromDirectory(
  directory: string
): Promise<{ slug: string }[]> {
  const files = await fs.readdir(directory);
  return files.map((file) => ({ slug: path.parse(file).name }));
}

export async function readMDXFile(
  directory: string,
  slug: string
): Promise<string> {
  const filePath = path.join(directory, `${slug}.mdx`);
  return fs.readFile(filePath, "utf-8");
}
