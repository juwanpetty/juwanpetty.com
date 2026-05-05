import { allExperiments } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { getAdjacentItems, getSortedExperiments } from "@/lib/content";
import { Page } from "@/components/page";

export async function generateStaticParams() {
  return allExperiments.map((experiment) => ({
    slug: experiment._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const experiment = allExperiments.find(
    (experiment) => experiment._meta.path === slug
  );

  if (!experiment) notFound();

  return {
    title: experiment.title,
    description: experiment.description,
    openGraph: {
      title: experiment.title,
      description: experiment.description,
      url: `https://juwanpetty.com/work/${slug}`,
      siteName: "Juwan Petty",
      type: "article",
    },
  };
}

type ExperimentDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkDetail({ params }: ExperimentDetailProps) {
  const { slug } = await params;
  const experiment = allExperiments.find(
    (experiment) => experiment._meta.path === slug
  );

  const sortedExperiments = getSortedExperiments();
  const {} = getAdjacentItems(sortedExperiments, slug);

  if (!experiment) {
    return notFound();
  }

  const { title } = experiment;

  return (
    <Page.Root>
      <div className="space-y-20">
        <Page.Header>
          <Page.Title>{title}</Page.Title>
        </Page.Header>

        <Page.Content>
          <div className="prose">
            <MDXContent
              code={experiment.mdx}
              components={{
                ...mdxComponents,
              }}
            />
          </div>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
