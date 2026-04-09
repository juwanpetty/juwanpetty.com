import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { getAdjacentItems, getSortedPosts } from "@/lib/content";
import { Page } from "@/components/page";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/dates";
import { LucideArrowLeft } from "lucide-react";
import { PrevNextNavigation } from "@/components/prev-next-navigation";
import Link from "next/link";

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

  const { title, published } = post;

  const formmattedDate = formatDate(published.toDateString(), FULL_DATE_FORMAT);

  return (
    <Page.Root>
      <Link
        href="/"
        className="text-muted-foreground mb-8 flex items-center gap-2 text-base"
      >
        <LucideArrowLeft className="size-4" />
        <span>Back</span>
      </Link>

      <header className="mb-8 flex flex-col gap-1">
        <h1 className="text-base font-[550]">{title}</h1>
        <div className="text-muted-foreground text-base">{formmattedDate}</div>
      </header>

      <div className="prose text-secondary-foreground">
        <MDXContent components={mdxComponents} code={post.mdx} />
      </div>

      <footer className="mt-16">
        <PrevNextNavigation
          baseUrl="/blog"
          previous={previous ?? undefined}
          next={next ?? undefined}
        />
      </footer>
    </Page.Root>
  );
}
