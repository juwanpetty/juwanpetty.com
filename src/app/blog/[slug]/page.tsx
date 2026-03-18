import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageSection } from "@/components/page-section";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/utils";
import { allArticles } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const article = allArticles.find((article) => article._meta.path === slug);

  if (!article) {
    return notFound();
  }

  const { title, published } = article;

  const formattedPublishedDate = formatDate(
    published.toDateString(),
    FULL_DATE_FORMAT
  );

  return (
    <div>
      <div className="mb-10 flex items-center">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="text-secondary-foreground -ml-2">
            <Icon name="back" className="size-4.5" />
            <span>Home</span>
          </Link>
        </Button>
      </div>

      <PageHeader>
        <PageHeaderTitle>{title}</PageHeaderTitle>
        <PageHeaderDescription>{formattedPublishedDate}</PageHeaderDescription>
      </PageHeader>

      <PageSection>
        <div className="prose mt-10">
          <MDXContent components={mdxComponents} code={article.mdx} />
        </div>
      </PageSection>

      <footer className="mt-16">
        <div className="flex items-center justify-between gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="text-secondary-foreground -ml-2">
              <Icon name="arrow-left" className="size-4" />
              <span>Installation</span>
            </Link>
          </Button>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/" className="text-secondary-foreground -mr-2">
              <span>Compatibility</span>
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  );
}
