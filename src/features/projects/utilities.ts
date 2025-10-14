import { Project } from "@/features/projects/types";
import { getSlugsFromDirectory } from "@/lib/mdx-utils";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/projects");

export async function getProject(slug: string) {
  const { default: Project, metadata } = await import(
    `@/content/projects/${slug}.mdx`
  );

  return {
    slug,
    content: Project,
    ...metadata,
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
