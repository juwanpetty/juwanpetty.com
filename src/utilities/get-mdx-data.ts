import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
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

export async function compileMDXPostContent(
  content: string,
  components?: MDXComponents
) {
  return compileMDX<PostMetadata>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components,
  });
}

export interface PostMetadata {
  title: string;
  datePublished: string;
  slug: string;
}

export async function getAllPosts(
  directory: string,
  limit?: number
): Promise<PostMetadata[]> {
  const files = await getFilesFromDirectory(directory);
  const limitedFiles =
    typeof limit === "number" ? files.slice(0, limit) : files;

  const posts = await Promise.all(
    limitedFiles.map(async (fileName) => {
      const mdxContent = await readMDXFile(directory, fileName);
      const { frontmatter } = await compileMDXPostContent(mdxContent);

      return {
        title: frontmatter.title,
        datePublished: frontmatter.datePublished,
        slug: fileName,
      };
    })
  );

  return posts;
}

export async function compileMDXProjectContent(
  content: string,
  components?: MDXComponents
) {
  return compileMDX<ProjectMetadata>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components,
  });
}

export interface ProjectMetadata {
  title: string;
  description: string;
  dateStarted: string;
  link: string;
  images: { src: string; alt: string }[];
}

export async function getAllProjects(
  directory: string,
  limit?: number
): Promise<ProjectMetadata[]> {
  const files = await getFilesFromDirectory(directory);
  const limitedFiles =
    typeof limit === "number" ? files.slice(0, limit) : files;

  const projects = await Promise.all(
    limitedFiles.map(async (fileName) => {
      const mdxContent = await readMDXFile(directory, fileName);
      const { frontmatter } = await compileMDXProjectContent(mdxContent);

      return {
        title: frontmatter.title,
        description: frontmatter.description,
        dateStarted: frontmatter.dateStarted,
        link: frontmatter.link,
        images: frontmatter.images || [],
      };
    })
  );

  return projects;
}
