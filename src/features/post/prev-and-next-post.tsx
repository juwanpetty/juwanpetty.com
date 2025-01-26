import Link from "next/link";
import { Post } from "@/features/post/types";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  previousPost: Post | null;
  nextPost: Post | null;
};

export function PrevAndNextPost({ previousPost, nextPost }: Props) {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <nav className="flex justify-between text-sm">
      <AdjacentPostLink label="Previous" post={previousPost} align="start" />
      <div className="flex grow" />
      <AdjacentPostLink label="Next" post={nextPost} align="end" />
    </nav>
  );
}

function AdjacentPostLink({
  label,
  post,
  align,
}: {
  label: "Previous" | "Next";
  post: Post | null;
  align: "start" | "end";
}) {
  if (!post) {
    return null;
  }

  return (
    <Link
      className="hover:decoration-secondary rounded-xs p-1 transition-colors"
      href={`/writing/${post.slug}`}
    >
      <div className={cn("flex flex-col", { "items-end": align === "end" })}>
        <span className="text-neutral-500">{label}</span>
        <span>{post.frontmatter.title}</span>
      </div>
    </Link>
  );
}
