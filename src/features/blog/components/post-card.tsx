"use client";

import type { Post } from "@/features/blog/types";
import { formatDate } from "@/shared/utilities/format-date";
import Link from "next/link";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const {
    frontmatter: { title, publishedAt },
    slug,
  } = post;

  return (
    <Link
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
      href={`/blog/${slug}`}
    >
      <p className="group-hover:text-grass-11 text-sand-12 m-0 truncate transition-colors">
        {title}
      </p>
      <hr className="group-hover:border-grass-4 border-sand-4 m-0 block min-w-7 flex-1 transition-colors" />
      <p className="m-0 shrink-0 font-mono tabular-nums text-neutral-500 transition-colors group-hover:text-neutral-900">
        {formatDate(publishedAt, "MMM dd")}
      </p>
    </Link>
  );
}
