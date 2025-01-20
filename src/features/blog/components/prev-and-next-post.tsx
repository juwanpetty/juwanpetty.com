import Link from "next/link";
import { Post } from "@/features/blog/types";
import { cn } from "@/shared/utilities/merge-classnames";

type Props = {
  previousPost?: Post;
  nextPost?: Post;
};

export function PrevAndNextPost({ previousPost, nextPost }: Props) {
  // Don’t render the section if no adjacent posts exist
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <section className="grid grid-cols-2 gap-6 border-t border-solid border-neutral-200 pt-12 text-base">
      <AdjacentPostLink
        label="Previous"
        post={previousPost}
        align="start"
        arrowDirection="left"
      />
      <AdjacentPostLink
        label="Next"
        post={nextPost}
        align="end"
        arrowDirection="right"
      />
    </section>
  );
}

function AdjacentPostLink({
  label,
  post,
  align,
  arrowDirection,
}: {
  label: "Previous" | "Next";
  post?: Post;
  align: "start" | "end";
  arrowDirection: "left" | "right";
}) {
  // If there's no post, render an empty placeholder to keep the grid layout
  if (!post) {
    return <div />;
  }

  return (
    <div
      className={cn("flex flex-col items-start text-left", {
        "items-end text-right": align === "end",
      })}
    >
      <div className="flex items-center justify-start gap-2">
        {arrowDirection === "left" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="size-3 h-5 min-w-3 text-neutral-500"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <polyline points="7.75 1.75 3.5 6 7.75 10.25"></polyline>
            </g>
          </svg>
        )}
        <span className="text-sm text-neutral-500">{label}</span>
        {arrowDirection === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="size-3 h-5 min-w-3 text-neutral-500"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <polyline points="4.25 10.25 8.5 6 4.25 1.75"></polyline>
            </g>
          </svg>
        )}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Go to ${label.toLowerCase()} post: ${post?.frontmatter?.title ?? ""}`}
        className={cn("flex items-center justify-start gap-2", {
          "justify-end": align === "end",
        })}
      >
        <span className="text-base">{post.frontmatter.title}</span>
      </Link>
    </div>
  );
}
