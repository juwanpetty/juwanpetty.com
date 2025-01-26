import { notFound } from "next/navigation";
import { Fragment } from "react";
import Link from "next/link";
import {
  getAllPosts,
  getAllPostSlug,
  getPostBySlug,
} from "@/features/post/utilities";
import { Post } from "@/features/post/types";
import { getAdjacentPosts } from "@/features/post/utilities";
import { formatDate } from "@/utilities/format-date";
import { PrevAndNextPost } from "@/features/post/prev-and-next-post";

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
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts: Post[] = await getAllPosts();
  const { prevPost, nextPost } = getAdjacentPosts(posts, slug);

  const {
    frontmatter: { title, publishedAt },
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
            className="-m-1 inline-flex items-center gap-1.5 rounded-sm p-1 text-sm"
            aria-label="Back to home page"
          >
            {backSVG}
            <span>Home</span>
          </Link>
        </span>
        <div className="relative">
          <Link
            className="top-0 hidden items-center gap-1.5 rounded-sm p-1 text-sm xl:absolute xl:inline-flex xl:-translate-x-60"
            aria-label="Back to home page"
            href="/"
          >
            {backSVG}
            <span>Home</span>
          </Link>
          <h1 className="text-balance text-lg font-medium">{title}</h1>
          <div className="flex items-center justify-between text-sm">
            <time dateTime="2021-01-01" className="text-neutral-500">
              {formatDate(publishedAt, "MMM dd, yyyy")}
            </time>
            <button className="rounded-full p-1 text-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className="size-5 min-w-5"
              >
                <g
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path d="M8.5,6.827c-.352,.168-.682,.398-.973,.69l-.01,.01c-1.381,1.381-1.381,3.619,0,5l2.175,2.175c1.381,1.381,3.619,1.381,5,0l.01-.01c1.381-1.381,1.381-3.619,0-5l-.931-.931"></path>
                  <path d="M9.5,11.173c.352-.168,.682-.398,.973-.69l.01-.01c1.381-1.381,1.381-3.619,0-5l-2.175-2.175c-1.381-1.381-3.619-1.381-5,0l-.01,.01c-1.381,1.381-1.381,3.619,0,5l.931,.931"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <article className="prose-headings:text-primary prose prose-base prose-neutral prose-headings:font-medium prose-h2:text-base prose-code:before:content-none prose-code:after:content-none">
        {content}
        {/* <p>
          Over the years, I have encountered a common piece of advice—learning
          to say &quot;no&quot;. Now I&apos;m asking myself why a request should
          change my focus.
        </p>

        <p>
          I don&apos;t want to simply become adept at saying no; I want to
          understand the motivations behind my decisions.
        </p>

        <p>
          My aim is to produce mindful, technical work that reflects my values
          and resonates with purpose. This requires a conscious effort to filter
          out any unnecessary commitments and distractions, enabling me to focus
          on projects that truly matter.
        </p>

        <p>
          Saying &quot;no&quot; isn&apos;t about restriction but{" "}
          <em>liberation</em>. It allows me to set boundaries, protect my time
          and ideas, ensuring that I have the mental capacity to invest in the
          important things.
        </p>

        <p>
          Having numerous opportunities is wonderful, and I will always be
          grateful for them. However, without clear reasonings it does not
          necessarily equal abundance.
        </p>

        <p>
          Not a restricting rule but rather a guiding principle, beginning a
          better 26th year ahead.
        </p> */}
      </article>

      <hr className="my-8 h-px border-0 bg-neutral-200" />

      <PrevAndNextPost previousPost={prevPost} nextPost={nextPost} />

      {/* <nav className="flex justify-between text-sm">
        <Link
          className="hover:decoration-secondary rounded-sm p-1 transition-colors"
          href="/writing/ikigai"
        >
          <div className="flex flex-col gap-1">
            <span className="text-neutral-500">Previous</span>
            <span>Ikigai</span>
          </div>
        </Link>
        <div className="flex grow" />
        <Link
          className="hover:decoration-secondary rounded-sm p-1 transition-colors"
          href="/writing/motion"
        >
          <div className="flex flex-col items-end gap-1">
            <span className="text-neutral-500">Next</span>
            <span>Motion</span>
          </div>
        </Link>
      </nav> */}
    </Fragment>
  );
}
