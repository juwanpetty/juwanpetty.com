import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import projects from "@data/projects.json";

export const metadata: Metadata = {
  title: "Projects — Juwan Petty",
};

function ProjectItem({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="space-y-4"
    >
      <div className="aspect-video w-full rounded-lg border border-neutral-200 bg-neutral-50" />
      <div className="px-4">
        <h2 className="text-base font-medium text-neutral-800">{title}</h2>
        <p className="text-base text-neutral-600">{description}</p>
      </div>
    </a>
  );
}

async function Projects() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="space-y-2">
          <h1 className="m-0 text-3xl font-semibold text-neutral-800">
            Projects
          </h1>
          <p className="m-0 text-lg text-neutral-600">
            Some cool projects I&apos;ve worked on.
          </p>
        </header>
        <div className="mt-8">
          {projects.map((project) => (
            <ProjectItem
              key={project.name}
              title={project.name}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Projects;
