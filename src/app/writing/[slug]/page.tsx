import { notFound } from "next/navigation";
import { Fragment } from "react";
import { Link } from "next-view-transitions";
import {
  getAllPosts,
  getAllPostSlug,
  getPostBySlug,
} from "@/features/post/utilities";
import { Post } from "@/features/post/types";
import { getAdjacentPosts } from "@/features/post/utilities";
import { formatDate } from "@/utilities/format-date";
import { PrevAndNextPost } from "@/features/post/prev-and-next-post";
import { PostMDXComponents } from "@/features/post/post-mdx-components";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return await getAllPostSlug();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = (await getPostBySlug(slug)) as Post;

  return {
    title: post.frontmatter.title,
  };
}

export default async function WritingDetail({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, {
    ...PostMDXComponents,
  });

  if (!post) {
    notFound();
  }

  const posts: Post[] = await getAllPosts();
  const { prevPost, nextPost } = getAdjacentPosts(posts, slug);

  const {
    frontmatter: { title, publishedAt, tags },
    content,
  } = post as Post;

  const backSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className="size-3 min-w-3 text-neutral-500"
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path d="m1.25,5.75h7.5c1.105,0,2,.895,2,2v2"></path>
        <polyline points="4.25 9 1 5.75 4.25 2.5"></polyline>
      </g>
    </svg>
  );

  return (
    <Fragment>
      <header className="mb-6 flex flex-col justify-between gap-6">
        <span className="xl:hidden">
          <Link
            href="/"
            className="-m-1 inline-flex items-center gap-1.5 rounded-xs p-1 text-sm"
            aria-label="Back to home page"
          >
            {backSVG}
            <span>Home</span>
          </Link>
        </span>
        <div className="relative">
          <Link
            className="top-0 hidden items-center gap-1.5 rounded-xs p-1 text-sm xl:absolute xl:inline-flex xl:-translate-x-60"
            aria-label="Back to home page"
            href="/"
          >
            {backSVG}
            <span>Home</span>
          </Link>
          <h1 className="text-lg font-medium text-balance">{title}</h1>
          <div className="flex items-center justify-between text-sm">
            <time
              dateTime={formatDate(publishedAt, "yyyy-MM-dd")}
              className="text-neutral-500"
            >
              {formatDate(publishedAt, "MMMM dd, yyyy")}
            </time>
          </div>
        </div>
      </header>
      <article className="prose prose-base prose-neutral prose-headings:font-medium prose-h2:text-base prose-code:before:content-none prose-code:after:content-none">
        {content}
      </article>

      <div className="my-8">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Link
                href={`/topics/${tag}`}
                className="inline-flex h-8 items-center justify-center rounded-full bg-neutral-100 px-4 text-sm text-neutral-500"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-8 h-px border-0 bg-neutral-200" />

      <PrevAndNextPost previousPost={prevPost} nextPost={nextPost} />
    </Fragment>
  );
}
