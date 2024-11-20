"use client";

import { useDynamicLineClamp } from "@/features/writing/hooks/useDynamicLineClamp";
import type { Post } from "@/features/writing/types";
import { ImagePlaceholder } from "@/shared/components/image-placeholder";
import { formatDate } from "@/shared/utilities/format-date";
import { cn } from "@/shared/utilities/merge-classnames";
import Link from "next/link";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const { elementRef: titleRef, lineClamp } = useDynamicLineClamp(2);

  return (
    <Link
      href={`/writing/${post.slug}`}
      key={post.slug}
      className="flex flex-col rounded-xl border border-neutral-100 p-4"
    >
      <div className="mb-4 flex-grow">
        <h2 ref={titleRef} className="mb-1 font-semibold">
          {post.title}
        </h2>
        <div className="mb-4 flex flex-row gap-2">
          <span className="text-neutral-500">
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <p
          className={cn("text-neutral-700", {
            "line-clamp-1": lineClamp === 1,
            "line-clamp-2": lineClamp === 2,
          })}
        >
          {post.excerpt}
        </p>
      </div>

      <ImagePlaceholder className="aspect-video" />
    </Link>
  );
}
