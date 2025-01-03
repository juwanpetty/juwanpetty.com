import { notFound } from "next/navigation";
import { PageLayout } from "@/shared/components/page-layout";
import {
  getAllPostSlug,
  getPostBySlug,
} from "@/features/blog/utilities/get-blog-data";
import { Post } from "@/features/blog/types";

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

  const { frontmatter, content } = post as Post;

  return (
    <PageLayout>
      <article className="prose">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.summary}</p>

        {content}
      </article>
    </PageLayout>
  );
}
