import { url } from "@/lib/url";
import { formatDate } from "date-fns";
import { Link } from "next-view-transitions";

interface ArticleCardProps {
  slug: string;
  title: string;
  date: string;
}

export function ArticleCard({ slug, title, date }: ArticleCardProps) {
  return (
    <Link
      key={slug}
      href={url.blogDetail(slug)}
      className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-4"
    >
      <h3 className="line-clamp-2 text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
      <div className="hidden flex-1 shrink border-t border-dashed border-black/10 sm:flex dark:border-white/10"></div>
      <span className="flex-none font-mono text-neutral-700 dark:text-white/70">
        {formatDate(date, "MMM dd")}
      </span>
    </Link>
  );
}
