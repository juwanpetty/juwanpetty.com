import { ArticleCard } from "@/components/article-card";
import {
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
  Breadcrumb,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Articles",
  description: "All of my thoughts collected in chronological order.",
};

export default async function ArticlesIndex() {
  const articles = await getAllArticles();
  const sortedAndGroupedArticles = getArticlesOrganizedByYear(articles);

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Articles</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-3xl">
        <header className="mt-10 space-y-1">
          <h2 className="text-base font-medium">Articles</h2>
          <span className="text-base/7 text-neutral-700 dark:text-white/70">
            Occasionally, I write about things on my mind.
          </span>
        </header>

        <section className="mt-16 space-y-8 pb-32 md:space-y-16">
          {sortedAndGroupedArticles.map((group) => (
            <div
              key={group.year}
              className="grid grid-cols-1 items-start gap-6 md:grid-cols-12"
            >
              <h2 className="col-span-2 text-left text-base font-medium">
                {group.year}
              </h2>
              <div className="col-span-10">
                <div className="flex flex-col sm:space-y-3">
                  {group.articles.map((article) => (
                    <Fragment key={article.slug}>
                      <ArticleCard
                        slug={article.slug}
                        title={article.title}
                        date={article.date}
                      />
                      <hr className="my-5 border-t border-dashed border-black/15 sm:hidden dark:border-white/15" />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </CenteredPageLayout>
  );
}

function sortArticlesByDateAndTitle(
  articles: ArticleWithSlug[],
  limit?: number
): ArticleWithSlug[] {
  const sorted = [...articles].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

interface GroupedPosts {
  year: string;
  articles: ArticleWithSlug[];
}

function groupArticlesByPublishedYear(
  articles: ArticleWithSlug[]
): GroupedPosts[] {
  const grouped: Record<string, ArticleWithSlug[]> = {};

  for (const article of articles) {
    const year = new Date(article.date).getFullYear().toString();
    grouped[year] = grouped[year] || [];
    grouped[year].push(article);
  }

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, articles]) => ({ year, articles }));
}

function getArticlesOrganizedByYear(
  articles: ArticleWithSlug[]
): GroupedPosts[] {
  const sortedArticles = sortArticlesByDateAndTitle(articles);
  return groupArticlesByPublishedYear(sortedArticles);
}
