import { allJobs, allNotes, allProjects, allWorks } from "content-collections";

export const getSortedWorks = () =>
  allWorks.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });

export const getSortedProjects = () =>
  allProjects.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || a.title.localeCompare(b.title);
  });

export const getSortedNotes = () =>
  allNotes.sort((a, b) => {
    const dateDiff = b.published.getTime() - a.published.getTime();
    return dateDiff || b._meta.path.localeCompare(a._meta.path);
  });

export const getSortedJobs = () =>
  allJobs.sort((a, b) => {
    return b.startDate.getTime() - a.startDate.getTime();
  });
