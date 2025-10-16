import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allProjects } from "content-collections";
import { notFound } from "next/navigation";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  const { mdx: content, title, description, demoURL, repoURL } = project;

  return (
    <div>
      <header className="mb-12 flex flex-col gap-1">
        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>

        <p className="text-base text-neutral-500">{description}</p>
      </header>

      {(demoURL || repoURL) && (
        <nav className="flex gap-1">
          {demoURL && (
            <a
              className="underline decoration-neutral-300 underline-offset-3 transition-colors hover:decoration-neutral-700"
              href={demoURL}
            >
              Website
            </a>
          )}
          {demoURL && repoURL && <span>/</span>}
          {repoURL && (
            <a
              className="underline decoration-neutral-300 underline-offset-3 transition-colors hover:decoration-neutral-700"
              href={repoURL}
            >
              Repository
            </a>
          )}
        </nav>
      )}

      <MDXContent code={content} components={getMDXComponents()} />
    </div>
  );
}
