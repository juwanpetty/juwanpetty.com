import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { getAdjacentItems, getSortedPosts } from "@/lib/content";
import { Page } from "@/components/page";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/dates";

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
  const {} = getAdjacentItems(sortedPosts, slug);

  if (!post) {
    return notFound();
  }

  const { title, published } = post;

  const formmattedDate = formatDate(published.toDateString(), FULL_DATE_FORMAT);

  return (
    <Page.Root>
      <Page.Header className="space-y-1">
        <Page.Title>{title}</Page.Title>
        <Page.Description>
          <span>{formmattedDate}</span>
        </Page.Description>
      </Page.Header>

      <Page.Content className="mt-20">
        <div className="prose">
          <MDXContent components={mdxComponents} code={post.mdx} />
        </div>
      </Page.Content>
    </Page.Root>
  );
}
