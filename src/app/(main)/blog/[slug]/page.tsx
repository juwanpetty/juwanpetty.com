import { notFound } from "next/navigation";
import { PageLayout } from "@/shared/components/page-layout";
import {
  getAllPostSlug,
  getPostBySlug,
} from "@/features/blog/utilities/get-blog-data";
import { Post } from "@/features/blog/types";
import { formatDate } from "@/shared/utilities/format-date";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return await getAllPostSlug();
}

export async function generateMetadata({ params }: Props) {
  const post = (await getPostBySlug((await params).slug)) as Post;

  return {
    title: post.frontmatter.title,
  };
}

export default async function WritingDetail({ params }: Props) {
  const post = await getPostBySlug((await params).slug);

  if (!post) {
    notFound();
  }

  const {
    frontmatter: { title, publishedAt, summary },
    content,
  } = post as Post;

  return (
    <PageLayout>
      <article className="prose prose-neutral prose-headings:text-base prose-headings:font-semibold prose-p:text-neutral-500">
        <h1>{title}</h1>
        <span>{formatDate(publishedAt)}</span>
        <p>{summary}</p>

        {content}
      </article>
    </PageLayout>
  );
}
