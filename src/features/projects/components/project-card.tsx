import Link from "next/link";
import type { Project } from "@/features/projects/types";
import { ImagePlaceholder } from "@/shared/components/image-placeholder";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const {
    frontmatter: { title, summary },
    slug,
  } = project;

  return (
    <Link href={`/projects/${slug}`} key={project.slug} className="rounded-xl">
      <ImagePlaceholder className="mb-2 aspect-video" />
      <div className="mb-4 md:px-3">
        <h2 className="mb-1 font-semibold">{title}</h2>
        <p className="line-clamp-2 text-neutral-700">{summary}</p>
      </div>
    </Link>
  );
}
