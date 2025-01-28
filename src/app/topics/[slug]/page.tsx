import { PostList } from "@/features/post/post-list";
import { getAllPosts, getPostsByTopic } from "@/features/post/utilities";
import {
  capitalizeTopicName,
  getAllTopicSlugs,
} from "@/features/topic/utilities";
import { Link } from "next-view-transitions";
import { Fragment } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return await getAllTopicSlugs(posts);
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  return {
    title: capitalizeTopicName(slug),
  };
}

export default async function TopicsDetail({ params }: Props) {
  const { slug } = await params;

  const posts = await getAllPosts();
  const filteredPosts = getPostsByTopic(posts, slug);

  const capitalizedTopicName = capitalizeTopicName(slug);

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
      <header className="mb-12 flex flex-col justify-between gap-6">
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
          <h1 className="text-lg font-medium text-balance">
            {capitalizedTopicName}
          </h1>
        </div>
      </header>

      <PostList posts={filteredPosts} />
    </Fragment>
  );
}
