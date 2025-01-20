import { notFound } from "next/navigation";
import { PageLayout } from "@/shared/components/page-layout";
import {
  getAllPosts,
  getAllPostSlug,
  getPostBySlug,
} from "@/features/blog/utilities/get-blog-data";
import { Post } from "@/features/blog/types";
import { formatDate } from "@/shared/utilities/format-date";
import { getAdjacentPosts } from "@/features/blog/utilities/post-utils";
import { PrevAndNextPost } from "@/features/blog/components/prev-and-next-post";

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
    frontmatter: { title, publishedAt, summary },
    content,
  } = post as Post;

  return (
    <PageLayout>
      <div className="flex flex-col gap-12">
        <article className="prose prose-neutral prose-headings:text-base prose-headings:font-semibold prose-p:text-neutral-500">
          <h1>{title}</h1>
          <span>{formatDate(publishedAt)}</span>
          <p>{summary}</p>
          {content}
        </article>
        <PrevAndNextPost
          previousPost={prevPost as Post}
          nextPost={nextPost as Post}
        />
      </div>
    </PageLayout>
  );
}
