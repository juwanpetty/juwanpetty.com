import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Frontmatter } from "@/features/post/types";

export async function readMDXFile(
  directory: string,
  slug: string,
  components: Record<string, React.ComponentType<React.PropsWithChildren<unknown>>> = {}
) {
  const fileName = slug + ".mdx";
  const filePath = path.join(directory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components,
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