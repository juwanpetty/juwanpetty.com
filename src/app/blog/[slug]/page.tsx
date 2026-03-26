import { PageSection } from "@/components/page-section";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import { PageHeader, PageHeaderTitle } from "@/components/page-header";
import { Metadata } from "next";
import { getAdjacentItems, getSortedPosts } from "@/lib/content";
import { DetailLayout } from "@/components/layouts/detail-layout";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://juwanpetty.com/blog/${slug}`,
      siteName: "Juwan Petty",
      type: "article",
    },
  };
}

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  const sortedPosts = getSortedPosts();
  const { previous, next } = getAdjacentItems(sortedPosts, slug);

  if (!post) {
    return notFound();
  }

  const { title } = post;

  return (
    <DetailLayout baseUrl="/blog" previous={previous} next={next}>
      <PageHeader>
        <PageHeaderTitle>{title}</PageHeaderTitle>
      </PageHeader>

      <PageSection>
        <div className="prose text-secondary-foreground mt-10">
          <MDXContent components={mdxComponents} code={post.mdx} />
        </div>
      </PageSection>
    </DetailLayout>
  );
}
