import { allPatterns } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { Preview } from "@/components/preview";
import { EmptyState } from "@/components/pattern/empty-state";
import { SnoozeDropdown } from "@/components/pattern/snooze-dropdown";
import { FloatingToolbar } from "@/components/pattern/floating-toolbar";
import { getAdjacentItems, getSortedPatterns } from "@/lib/content";
import { CopyButton } from "@/components/pattern/copy-button";
import { Page } from "@/components/page";
import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";
import { PrevNextNavigation } from "@/components/prev-next-navigation";

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
  const { previous, next } = getAdjacentItems(sortedPatterns, slug);

  if (!pattern) {
    return notFound();
  }

  const { title, description } = pattern;

  return (
    <Page.Root>
      <Link
        href="/"
        className="text-muted-foreground mb-8 flex items-center gap-2 text-base"
      >
        <LucideArrowLeft className="size-4" />
        <span>Back</span>
      </Link>

      <header className="mb-8 flex flex-col gap-1">
        <h1 className="text-base font-[550]">{title}</h1>
        <div className="text-muted-foreground text-base">{description}</div>
      </header>

      <div className="prose text-secondary-foreground">
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

      <footer className="mt-16">
        <PrevNextNavigation
          baseUrl="/patterns"
          previous={previous ?? undefined}
          next={next ?? undefined}
        />
      </footer>
    </Page.Root>
  );
}
