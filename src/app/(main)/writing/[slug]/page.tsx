import { notFound } from "next/navigation";
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
import { Fragment } from "react";

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
    frontmatter: { title, publishedAt },
    content,
  } = post as Post;

  return (
    <Fragment>
      <div>
        <header className="mb-6 flex flex-col justify-between gap-24">
          <div className="relative">
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

        <hr className="my-8 h-px border-0 bg-neutral-200" />

        <PrevAndNextPost previousPost={prevPost} nextPost={nextPost} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
          <div className="no-scrollbar h-full overflow-auto pb-10">aside</div>
        </div>
      </div>
    </Fragment>
  );
}
