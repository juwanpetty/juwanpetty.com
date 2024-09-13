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
      <div className="border-sand-4 bg-sand-1 aspect-video w-full rounded-lg border" />
      <div className="px-4">
        <h2 className="text-sand-12 text-base font-medium">{title}</h2>
        <p className="text-sand-9 text-base">{description}</p>
      </div>
    </a>
  );
}

async function Projects() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="space-y-2">
          <h1 className="text-sand-12 m-0 text-3xl font-semibold">Projects</h1>
          <p className="text-sand-9 m-0 text-lg">
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
