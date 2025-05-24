import { ProjectMetadata } from "@/utilities/get-mdx-data";

export function sortProjectsByDateThenTitle(
  projects: ProjectMetadata[]
): ProjectMetadata[] {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.dateStarted).getTime();
    const dateB = new Date(b.dateStarted).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });
}
