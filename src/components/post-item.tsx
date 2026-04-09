import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/dates";
import type { Post } from "content-collections";
import Link from "next/link";

type PostItemProps = {
  post: Post;
};

export function PostItem({ post }: PostItemProps) {
  const { title, published } = post;
  const path = post._meta.path;

  const formattedDate = formatDate(
    published.toDateString(),
    SHORTHAND_DATE_FORMAT
  );

  return (
    <Link
      href={`/blog/${path}`}
      className="flex w-full items-center justify-between py-2 opacity-100 transition-opacity duration-200 group-hover/list:opacity-40 hover:opacity-100"
    >
      <span className="max-w-4/5 min-w-0 truncate text-base">{title}</span>
      <span className="text-muted-foreground text-base whitespace-nowrap">
        {formattedDate}
      </span>
    </Link>
  );
}
