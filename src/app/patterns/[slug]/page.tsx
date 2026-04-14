import { allPatterns } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { Preview } from "@/components/preview";
import { EmptyState } from "@/components/pattern/empty-state";
import { SnoozeDropdown } from "@/components/pattern/snooze-dropdown";
import { FloatingToolbar } from "@/components/pattern/floating-toolbar";
import { getAdjacentItems, getSortedPatterns } from "@/lib/content";
import { CopyButton } from "@/components/pattern/copy-button";
import { Page } from "@/components/page";

export async function generateStaticParams() {
  return allPatterns.map((pattern) => ({
    slug: pattern._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const pattern = allPatterns.find((pattern) => pattern._meta.path === slug);

  if (!pattern) notFound();

  return {
    title: pattern.title,
    description: pattern.description,
    openGraph: {
      title: pattern.title,
      description: pattern.description,
      url: `https://juwanpetty.com/patterns/${slug}`,
      siteName: "Juwan Petty",
      type: "article",
    },
  };
}

type PatternDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PatternDetail({ params }: PatternDetailProps) {
  const { slug } = await params;
  const pattern = allPatterns.find((pattern) => pattern._meta.path === slug);

  const sortedPatterns = getSortedPatterns();
  const {} = getAdjacentItems(sortedPatterns, slug);

  if (!pattern) {
    return notFound();
  }

  const { title } = pattern;

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
                CopyButton,
                EmptyState,
                FloatingToolbar,
                Preview,
                SnoozeDropdown,
              }}
              code={pattern.mdx}
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
