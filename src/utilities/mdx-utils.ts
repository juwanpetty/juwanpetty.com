import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import path from "path";

interface BaseMetadata {
  title: string;
  datePublished: string;
}

export interface PostMetadata extends BaseMetadata {
  slug: string;
}

export interface ProjectMetadata extends BaseMetadata {
  description: string;
  link: string;
  image: string;
}

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

async function compileMDXContent<T extends BaseMetadata>(
  content: string,
  components?: MDXComponents
) {
  return compileMDX<T>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components,
  });
}

async function getAllItems<T extends BaseMetadata>(
  directory: string,
  limit: number | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (frontmatter: any) => T
): Promise<T[]> {
  const files = await getFilesFromDirectory(directory);
  const limitedFiles =
    typeof limit === "number" ? files.slice(0, limit) : files;

  const items = await Promise.all(
    limitedFiles.map(async (fileName) => {
      const mdxContent = await readMDXFile(directory, fileName);
      const { frontmatter } = await compileMDXContent<T>(mdxContent);
      return transform({ ...frontmatter, slug: fileName });
    })
  );

  return items;
}

export async function getAllPosts(
  directory: string,
  limit?: number
): Promise<PostMetadata[]> {
  return getAllItems<PostMetadata>(
    directory,
    limit,
    (frontmatter: PostMetadata) => ({
      title: frontmatter.title,
      datePublished: frontmatter.datePublished,
      slug: frontmatter.slug,
    })
  );
}

export async function getAllProjects(
  directory: string,
  limit?: number
): Promise<ProjectMetadata[]> {
  return getAllItems<ProjectMetadata>(
    directory,
    limit,
    (frontmatter: ProjectMetadata) => ({
      title: frontmatter.title,
      description: frontmatter.description,
      datePublished: frontmatter.datePublished,
      link: frontmatter.link,
      image: frontmatter.image || "",
    })
  );
}

export const compileMDXPostContent = compileMDXContent<PostMetadata>;
export const compileMDXProjectContent = compileMDXContent<ProjectMetadata>;
