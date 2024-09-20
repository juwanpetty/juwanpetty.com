import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import projects from "@data/projects.json";
import { ImagePlaceholder } from "@components/ImagePlaceholder";

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
      <ImagePlaceholder className="aspect-video" />
      <div className="px-4">
        <h2 className="text-base font-medium text-sand-12">{title}</h2>
        <p className="text-base text-sand-9">{description}</p>
      </div>
    </a>
  );
}

async function Projects() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="space-y-1">
          <h1 className="m-0 text-2xl font-semibold text-sand-12">Projects</h1>
          <p className="m-0 text-lg text-sand-9">
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
