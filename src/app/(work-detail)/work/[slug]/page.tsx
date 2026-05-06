import { allExperiments } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { getAdjacentItems, getSortedExperiments } from "@/lib/content";
import {
  IconChevronLeftFill18,
  IconChevronRightFill18,
} from "nucleo-ui-fill-18";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
  const { next, previous } = getAdjacentItems(sortedExperiments, slug);

  if (!experiment) {
    return notFound();
  }

  const { title } = experiment;

  return (
    <div>
      <header className="fixed top-0 right-0 left-0 flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="/work"
          className={cn(
            "border-gray-6 text-gray-12 bg-gray-a3 flex h-10 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium backdrop-blur-lg"
          )}
        >
          <IconChevronLeftFill18 className="text-gray-9 size-4" />
          <span className="px-0.5">Back</span>
        </Link>

        <button
          className={cn(
            "border-gray-6 text-gray-12 bg-gray-a3 flex h-10 items-center gap-1.5 rounded-full border px-3.5 text-sm font-medium backdrop-blur-lg"
          )}
        >
          <span className="px-0.5">View Details</span>
        </button>
      </header>

      <main>
        <div className="px-4 py-20 sm:px-6">
          <MDXContent code={experiment.mdx} components={mdxComponents} />
        </div>
      </main>

      <footer className="fixed right-0 bottom-0 left-0 flex h-16 items-center px-4 sm:px-6">
        <div className="flex items-center">
          {previous && (
            <Link
              href={`/work/${previous._meta.path}`}
              className="border-gray-6 text-gray-12 bg-gray-a3 flex h-10 items-center gap-1.5 rounded-l-full border px-3.5 text-sm font-medium backdrop-blur-lg"
            >
              <IconChevronLeftFill18 className="text-gray-9 size-4" />
              <span className="sr-only">Prev</span>
            </Link>
          )}

          {next && (
            <Link
              href={`/work/${next._meta.path}`}
              className="border-gray-6 text-gray-12 bg-gray-a3 flex h-10 items-center gap-1.5 rounded-r-full border border-l-0 px-3.5 text-sm font-medium backdrop-blur-lg"
            >
              <span className="sr-only">Next</span>
              <IconChevronRightFill18 className="text-gray-9 size-4" />
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}
