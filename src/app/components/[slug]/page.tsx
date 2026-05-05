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
      url: `https://juwanpetty.com/components/${slug}`,
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

export default async function ExperimentDetail({
  params,
}: ExperimentDetailProps) {
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
              components={{
                ...mdxComponents,
              }}
              code={experiment.mdx}
            />
          </div>
        </Page.Content>
      </div>

      {/* <div>
        <header>
          <h1 className="max-w-3xl text-xl font-semibold text-balance">
            Infinite card stack
          </h1>
        </header>

        <Page.Content className="mt-20">
          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed">
            I recently shared{" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground decoration-muted-foreground/25 font-medium underline underline-offset-3"
            >
              this component
            </a>{" "}
            on X, and a lot of people liked it. This article briefly explains
            how it’s built.
          </p>

          <div className="my-8 aspect-video rounded-xl border border-black/10 bg-neutral-50/50 dark:border-white/10" />
        </Page.Content>
      </div> */}
    </Page.Root>
  );
}
