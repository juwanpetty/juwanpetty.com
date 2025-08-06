import { type ArticleWithSlug } from "@/lib/articles";
import { formatDate } from "date-fns/format";

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mx-auto max-w-xl">
        <article className="w-full flex-1">
          <header className="flex flex-col">
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
    </div>
  );
}
