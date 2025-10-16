import { allProjects } from "content-collections";

export const projectsSortedByDate = allProjects.toSorted(
  (a, b) => b.date.getTime() - a.date.getTime()
);
