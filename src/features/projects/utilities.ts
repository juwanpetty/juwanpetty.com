import { Project, ProjectMetadata } from "@/features/projects/types";
import { getSlugsFromDirectory, readMDXFile } from "@/lib/mdx-utils";
import path from "path";
import { getMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";

const contentDir = path.join(process.cwd(), "src/content/projects");

export async function getProject(slug: string) {
  const { content, frontmatter } = await compileMDX<ProjectMetadata>({
    source: await readMDXFile(contentDir, slug),
    options: {
      parseFrontmatter: true,
    },
    components: getMDXComponents(),
  });
  return {
    slug,
    content,
    ...frontmatter,
  } as Project;
}

export async function getProjects() {
  const slugs = await getSlugsFromDirectory(contentDir);

  const projects = await Promise.all(
    slugs.map(async ({ slug }) => getProject(slug))
  );

  return [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return a.title.localeCompare(b.title);
    }

    return dateB - dateA;
  });
}

export async function getProjectSlugs() {
  return getSlugsFromDirectory(contentDir);
}
