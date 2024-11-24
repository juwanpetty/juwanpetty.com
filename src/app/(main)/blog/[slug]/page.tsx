import { notFound } from "next/navigation";
import { PageLayout } from "@/shared/components/page-layout";
import {
  getAllPostSlug,
  getPostBySlug,
} from "@/features/blog/utilities/get-blog-data";
import { Post } from "@/features/blog/types";

export async function generateStaticParams() {
  return await getAllPostSlug();
}

export default async function WritingDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
