import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export async function readMDXFile<T>(
  directory: string,
  slug: string,
) {
  const fileName = slug + ".mdx";
  const filePath = path.join(directory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<T>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {},
  });

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export function readDirectory(directory: string): string[] {
  return fs.readdirSync(directory).map((file) => path.parse(file).name);
}

export function getSlugsFromDirectory(directory: string) {
  return fs.readdirSync(directory).map((file) => ({ slug: path.parse(file).name }));
}