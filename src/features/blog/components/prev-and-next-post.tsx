import Link from "next/link";
import { Post } from "@/features/blog/types";

type Props = {
  previousPost?: Post;
  nextPost?: Post;
};

export function PrevAndNextPost({ previousPost, nextPost }: Props) {
  return (
    <section className="grid grid-cols-2 gap-6 border-t border-solid border-neutral-200 pt-12 text-base">
      {previousPost ? (
        <div className="flex flex-col items-start text-left">
          <span className="pl-6 text-base text-neutral-500">Previous</span>
          <Link
            href={`/blog/${previousPost?.slug}`}
            className="flex items-start justify-start gap-2"
          >
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
                <polyline points="11.5 15.25 5.25 9 11.5 2.75"></polyline>
              </g>
            </svg>
            <span className="text-base">{previousPost?.frontmatter.title}</span>
          </Link>
        </div>
      ) : (
        <div />
      )}

      {nextPost ? (
        <div className="flex flex-col items-end text-right">
          <span className="pr-6 text-base text-neutral-500">Next</span>
          <Link
            href={`/blog/${nextPost?.slug}`}
            className="flex items-start justify-end gap-2"
          >
            <span className="text-base">{nextPost?.frontmatter.title}</span>
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
                <polyline points="6.5 2.75 12.75 9 6.5 15.25"></polyline>
              </g>
            </svg>
          </Link>
        </div>
      ) : (
        <div />
      )}
    </section>
  );
}
