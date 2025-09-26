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
      <header className="mb-12">
        <h1 className="mb-3 text-[1.75rem] leading-8 font-semibold text-neutral-800">
          {title}
        </h1>
      </header>

      <p className="mb-12 text-base leading-relaxed text-neutral-500">
        {description}
      </p>

      <WorkDetails date={date} repository={repository} website={website} />

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getWorkSlugs();
}

export const dynamicParams = false;
