import { getProject, getProjectSlugs } from "@/features/projects/utilities";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const { content, title, description, repoURL, demoURL } =
    await getProject(slug);

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

      {content}
    </div>
  );
}

export async function generateStaticParams() {
  return await getProjectSlugs();
}

export const dynamicParams = false;
