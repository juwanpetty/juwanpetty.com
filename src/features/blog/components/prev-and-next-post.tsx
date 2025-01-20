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
      <span
        className={cn("pl-6 text-base text-neutral-500", {
          "pr-6": align === "end",
        })}
      >
        {label}
      </span>
      <Link
        href={`/blog/${post.slug}`}
        aria-label={`Go to ${label.toLowerCase()} post: ${post?.frontmatter?.title ?? ""}`}
        className={cn("flex items-center justify-start gap-2", {
          "justify-end": align === "end",
        })}
      >
        {arrowDirection === "left" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="size-4 h-6 min-w-4 text-neutral-500"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <polyline points="11.5 15.25 5.25 9 11.5 2.75" />
            </g>
          </svg>
        )}
        <span className="text-base">{post.frontmatter.title}</span>
        {arrowDirection === "right" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="size-4 h-6 min-w-4 text-neutral-500"
          >
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <polyline points="6.5 2.75 12.75 9 6.5 15.25" />
            </g>
          </svg>
        )}
      </Link>
    </div>
  );
}
