import { PageSection } from "@/components/page-section";
import { formatDate } from "@/lib/utils";
import { allArticles } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";

const FORMAT_STRING = "LLL yyyy";

type ArticlesDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlesDetail({ params }: ArticlesDetailProps) {
  const { slug } = await params;
  const article = allArticles.find((article) => article._meta.path === slug);

  if (!article) {
    return notFound();
  }

  const { title, published } = article;

  const formattedPublishedDate = formatDate(
    published.toDateString(),
    FORMAT_STRING
  );

  return (
    <div className="mx-auto max-w-2xl py-14">
      <div></div>

      <div className="space-y-16">
        <div className="flex w-full flex-col gap-1.5 sm:w-auto">
          <h1 className="font-heading scroll-m-28 text-3xl tracking-tight">
            {title}
          </h1>

          <div className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
            <span>8 min read</span>
            <span>•</span>
            <span>{formattedPublishedDate}</span>
          </div>
        </div>

        <PageSection>
          <div className="space-y-5">
            <div>
              <MDXContent code={article.mdx} components={mdxComponents} />
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
