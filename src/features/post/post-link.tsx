import { Link } from "next-view-transitions";
import { Post } from "@/features/post/types";
import { formatDate } from "@/utilities/format-date";

type Props = {
  post: Post;
};

export function PostLink({ post }: Props) {
  const {
    frontmatter: { title, publishedAt },
    slug,
  } = post;

  return (
    <Link
      href={`/writing/${slug}`}
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
    >
      <p className="m-0 truncate text-neutral-900 transition-colors">{title}</p>
      <hr className="m-0 block min-w-7 flex-1 border-neutral-200 transition-colors group-hover:border-neutral-300" />
      <p className="m-0 shrink-0 text-neutral-500 tabular-nums transition-colors group-hover:text-neutral-900">
        {formatDate(publishedAt, "MMM dd")}
      </p>
    </Link>
  );
}
