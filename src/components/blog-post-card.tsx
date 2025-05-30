import { formatDate } from "@/utilities/format-date";
import { Link } from "next-view-transitions";

interface PostCardProps {
  title: string;
  datePublished: string;
  slug: string;
}

export function PostCard({ title, datePublished, slug }: PostCardProps) {
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <Link href={`/blog/${slug}`} className="flex flex-col gap-1">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center sm:gap-2">
        <h3 className="truncate text-base font-semibold">{title}</h3>
        <span className="text-sm text-nowrap text-neutral-500">
          {formattedDate}
        </span>
      </div>
      <p className="hidden text-sm text-neutral-500 sm:block">
        This is a brief description of the blog post.
      </p>
    </Link>
  );
}
