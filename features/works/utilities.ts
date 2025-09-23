import { Work } from "@/features/works/types";
import { getSlugsFromDirectory } from "@/lib/mdx-utils";
import path from "path";

const contentDir = path.join(process.cwd(), "content/works");

export async function getWork(slug: string) {
  const { default: Work, metadata } = await import(
    `@/content/works/${slug}.mdx`
  );

  return {
    slug,
    content: Work,
    ...metadata,
  } as Work;
}

export async function getWorks() {
  const slugs = await getSlugsFromDirectory(contentDir);

  const works = await Promise.all(slugs.map(async ({ slug }) => getWork(slug)));

  return [...works].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return a.title.localeCompare(b.title);
    }

    return dateB - dateA;
  });
}

export async function getWorkSlugs() {
  return getSlugsFromDirectory(contentDir);
}
