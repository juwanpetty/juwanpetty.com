import {
  IconArrowLeftOutline18,
  IconArrowRightOutline18,
  IconUTurnToLeftOutline18,
} from "nucleo-ui-outline-18";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { allCrafts } from "content-collections";
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
import { EmptyState } from "@/components/craft/empty-state";
import { SnoozeDropdown } from "@/components/craft/snooze-dropdown";
import { FloatingToolbar } from "@/components/craft/floating-toolbar";

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const craft = allCrafts.find((craft) => craft._meta.path === slug);

  if (!craft) notFound();

  return {
    title: craft.title,
  };
}

type CraftDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CraftDetail({ params }: CraftDetailProps) {
  const { slug } = await params;
  const craft = allCrafts.find((craft) => craft._meta.path === slug);

  const { previous, next } = getAdjacentCrafts(slug);

  if (!craft) {
    return notFound();
  }

  const { title, description } = craft;

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
            code={craft.mdx}
          />
        </div>
      </PageSection>

      <footer className="mt-16">
        <div className="flex items-center justify-between gap-2">
          {previous && (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={`/crafts/${previous._meta.path}`}
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
                href={`/crafts/${next._meta.path}`}
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

export const getSortedCrafts = () => {
  return allCrafts.sort((a, b) => (a.published < b.published ? 1 : -1));
};

function getAdjacentCrafts(slug: string) {
  const sortedCrafts = getSortedCrafts();

  const index = sortedCrafts.findIndex((craft) => craft._meta.path === slug);

  return {
    previous: sortedCrafts[index - 1] || null,
    next: sortedCrafts[index + 1] || null,
  };
}
