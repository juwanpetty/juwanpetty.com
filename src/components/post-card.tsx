import { formatDate } from "@/utilities/format-date";
import { PostMetadata } from "@/utilities/get-mdx-data";
import { Link } from "next-view-transitions";

type Props = {
  post: PostMetadata;
  className?: string;
};

export function PostCard({ post }: Props) {
  const { title, datePublished, slug } = post;
  const formattedDate = formatDate(datePublished, "MMM dd");

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
    >
      <p className="m-0 truncate text-neutral-900 transition-colors">{title}</p>
      <hr className="m-0 block min-w-7 flex-1 border-neutral-200 transition-colors group-hover:border-neutral-300" />
      <p className="m-0 shrink-0 text-neutral-500 tabular-nums transition-colors group-hover:text-neutral-900">
        {formattedDate}
      </p>
    </Link>
  );
}
