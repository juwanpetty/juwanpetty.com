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
      <header className="mb-15">
        <h1 className="mb-5 text-base font-semibold text-neutral-800">
          {title}
        </h1>

        <p className="text-base leading-relaxed text-neutral-500">
          {description}
        </p>
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
