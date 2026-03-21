import {
  IconArrowLeftOutline18,
  IconArrowRightOutline18,
  IconUTurnToLeftOutline18,
} from "nucleo-ui-outline-18";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/utils";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";
import { Metadata } from "next";

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
  };
}

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  const { previous, next } = getAdjacentPosts(slug);

  if (!post) {
    return notFound();
  }

  const { title, published } = post;

  const formattedPublishedDate = formatDate(
    published.toDateString(),
    FULL_DATE_FORMAT
  );

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
        <PageHeaderDescription>{formattedPublishedDate}</PageHeaderDescription>
      </PageHeader>

      <PageSection>
        <div className="prose text-secondary-foreground mt-10">
          <MDXContent components={mdxComponents} code={post.mdx} />
        </div>
      </PageSection>

      <footer className="mt-16">
        <div className="flex items-center justify-between gap-2">
          {previous && (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={`/blog/${previous._meta.path}`}
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
                href={`/blog/${next._meta.path}`}
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

export const getSortedPosts = () => {
  return allPosts.sort((a, b) => (a.published < b.published ? 1 : -1));
};

function getAdjacentPosts(slug: string) {
  const sortedPosts = getSortedPosts();

  const index = sortedPosts.findIndex((post) => post._meta.path === slug);

  return {
    previous: sortedPosts[index - 1] || null,
    next: sortedPosts[index + 1] || null,
  };
}
