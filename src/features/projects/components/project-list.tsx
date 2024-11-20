import { ProjectCard } from "@/features/projects/components/project-card";
import type { Project } from "@/features/projects/types";

type Props = {
  projects: Project[];
};

export function ProjectList({ projects }: Props) {
  return (
    <section className="grid grid-cols-1 gap-10">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  );
}
