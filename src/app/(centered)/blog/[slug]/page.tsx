import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const { mdx: content, title, date } = post;

  const dateString = date.toDateString();
  const formattedDate = formatDate(dateString, SHORTHAND_DATE_FORMAT);

  return (
    <div>
      <header className="mb-12 flex flex-col gap-1">
        <time className="text-sm text-neutral-500" dateTime={dateString}>
          {formattedDate}
        </time>

        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>
      </header>

      <MDXContent code={content} components={getMDXComponents()} />
    </div>
  );
}
