import { ProjectDetails } from "@/features/projects/components/project-details";
import { getProject, getProjectSlugs } from "@/features/projects/utilities";

type ProjectDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { slug } = await params;
  const {
    content: Content,
    title,
    description,
    repository,
    website,
    date,
  } = await getProject(slug);

  return (
    <div>
      <header className="mb-12 flex flex-col gap-1">
        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>

        <p className="text-base text-neutral-500">{description}</p>
      </header>

      <ProjectDetails date={date} repository={repository} website={website} />

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getProjectSlugs();
}

export const dynamicParams = false;
