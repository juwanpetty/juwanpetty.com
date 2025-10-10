import { WorkDetails } from "@/features/works/components/work-details";
import { getWork, getWorkSlugs } from "@/features/works/utilities";

type WorkDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkDetailsPage({
  params,
}: WorkDetailsPageProps) {
  const { slug } = await params;
  const {
    content: Content,
    title,
    description,
    repository,
    website,
    date,
  } = await getWork(slug);

  return (
    <div>
      <header className="mb-12 flex flex-col gap-1">
        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>

        <p className="text-base text-neutral-500">{description}</p>
      </header>

      <WorkDetails date={date} repository={repository} website={website} />

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getWorkSlugs();
}

export const dynamicParams = false;
