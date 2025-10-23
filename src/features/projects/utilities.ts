import { projects } from "@/lib/source";

const allProjects = projects.getPages();

export const projectsSortedByDate = allProjects.toSorted(
  (a, b) => b.data.date.getTime() - a.data.date.getTime()
);
