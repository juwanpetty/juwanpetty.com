import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { type ArticleWithSlug } from "@/lib/articles";
import { url } from "@/lib/url";
import { formatDate } from "date-fns/format";

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator className="max-md:hidden" />
          <Breadcrumb href={url.blogIndex()} className="max-md:hidden">
            Blog
          </Breadcrumb>
          <BreadcrumbSeparator />
          <Breadcrumb>{article.title}</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-2xl">
        <article className="w-full flex-1">
          <header className="mt-10 mb-14 flex flex-col">
            <h1 className="scroll-m-4 text-xl font-medium">{article.title}</h1>
            <time
              dateTime={article.date}
              className="flex items-center text-base text-neutral-400 dark:text-neutral-500"
            >
              <span>{formatDate(article.date, "MMMM yyyy")}</span>
            </time>
          </header>
          <div id="content" className="mt-8">
            {children}
          </div>
        </article>
      </div>
    </CenteredPageLayout>
  );
}
