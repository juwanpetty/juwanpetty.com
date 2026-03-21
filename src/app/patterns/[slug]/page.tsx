import {
  IconArrowLeftOutline18,
  IconArrowRightOutline18,
  IconUTurnToLeftOutline18,
} from "nucleo-ui-outline-18";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { allPatterns } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";
import { Metadata } from "next";
import { Preview } from "@/components/preview";
import { EmptyState } from "@/components/pattern/empty-state";
import { SnoozeDropdown } from "@/components/pattern/snooze-dropdown";
import { FloatingToolbar } from "@/components/pattern/floating-toolbar";

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

  const { previous, next } = getAdjacentPatterns(slug);

  if (!pattern) {
    return notFound();
  }

  const { title, description } = pattern;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10 flex items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="text-secondary-foreground -ml-2">
            <IconUTurnToLeftOutline18 className="size-4.5" />
            <span>Home</span>
          </Link>
        </Button>
      </div>

      <PageHeader>
        <PageHeaderTitle>{title}</PageHeaderTitle>
        <PageHeaderDescription>
          <p>{description}</p>
        </PageHeaderDescription>
      </PageHeader>

      <PageSection>
        <div className="prose text-secondary-foreground mt-10">
          <MDXContent
            components={{
              ...mdxComponents,
              Preview,
              EmptyState,
              SnoozeDropdown,
              FloatingToolbar,
            }}
            code={pattern.mdx}
          />
        </div>
      </PageSection>

      <footer className="mt-16">
        <div className="flex items-center justify-between gap-2">
          {previous && (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={`/patterns/${previous._meta.path}`}
                className="text-secondary-foreground -ml-2"
              >
                <IconArrowLeftOutline18 className="size-4" />
                <span>{previous.title}</span>
              </Link>
            </Button>
          )}

          {next && (
            <Button variant="ghost" size="sm" asChild className="ml-auto">
              <Link
                href={`/patterns/${next._meta.path}`}
                className="text-secondary-foreground -mr-2"
              >
                <span>{next.title}</span>
                <IconArrowRightOutline18 className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}

export const getSortedPatterns = () => {
  return allPatterns.sort((a, b) => (a.published < b.published ? 1 : -1));
};

function getAdjacentPatterns(slug: string) {
  const sortedPatterns = getSortedPatterns();

  const index = sortedPatterns.findIndex(
    (pattern) => pattern._meta.path === slug
  );

  return {
    previous: sortedPatterns[index - 1] || null,
    next: sortedPatterns[index + 1] || null,
  };
}
