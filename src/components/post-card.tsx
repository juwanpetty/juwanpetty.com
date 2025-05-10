import { PostMetadata } from "@/utilities/get-mdx-data";
import { format } from "date-fns";
import { Link } from "next-view-transitions";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  post: PostMetadata;
  className?: string;
};

export function PostCard({ post, className }: Props) {
  const { title, datePublished, slug } = post;
  const formattedDate = format(new Date(datePublished), "MMMM dd");

  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "flex items-center justify-between rounded-lg bg-neutral-100 px-4 py-1.5",
        className
      )}
    >
      <h3 className="grow text-base font-medium">{title}</h3>
      <time dateTime={datePublished} className="text-sm text-neutral-500">
        {formattedDate}
      </time>
    </Link>
  );
}
