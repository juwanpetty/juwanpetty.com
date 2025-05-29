import { ProjectMetadata } from "@/utilities/mdx-utils";

export function sortProjectsByDateThenTitle(
  projects: ProjectMetadata[]
): ProjectMetadata[] {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });
}
