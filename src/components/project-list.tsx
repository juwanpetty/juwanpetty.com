import { ProjectItem } from "@/components/project-item";
import projects from "@/data/projects.json";

export function ProjectList() {
  return (
    <div className="flex flex-col gap-y-3">
      {projects.map((project) => (
        <ProjectItem key={project.title} project={project} />
      ))}
    </div>
  );
}
