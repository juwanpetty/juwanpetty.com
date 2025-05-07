import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export async function getFilesFromDirectory(
  directory: string
): Promise<string[]> {
  const files = await fs.readdir(directory);
  return files.map((file) => path.parse(file).name);
}

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

export async function compileMDXContent(content: string) {
  return compileMDX<PostMetadata>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });
}

export interface PostMetadata {
  title: string;
  datePublished: string;
  description: string;
  slug: string;
}

export async function getAllPosts(directory: string): Promise<PostMetadata[]> {
  const files = await getFilesFromDirectory(directory);
  const posts = await Promise.all(
    files.map(async (fileName) => {
      const mdxContent = await readMDXFile(directory, fileName);
      const { frontmatter } = await compileMDXContent(mdxContent);

      return {
        title: frontmatter.title,
        datePublished: frontmatter.datePublished,
        description: frontmatter.description,
        slug: fileName,
      };
    })
  );

  return posts;
}
