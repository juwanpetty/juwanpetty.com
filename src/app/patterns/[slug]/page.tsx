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
import { getAdjacentItems, getSortedPatterns } from "@/lib/content";
import { DetailLayout } from "@/components/layouts/detail-layout";

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
    <DetailLayout baseUrl="/patterns" previous={previous} next={next}>
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
    </DetailLayout>
  );
}
