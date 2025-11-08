import { formatDate, FULL_DATE_FORMAT } from "@/lib/utils";
import { getMDXComponents } from "@/mdx-components";
import { blog } from "@/lib/source";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/back-button";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const post = blog.getPage([slug]);

  if (!post) {
    return notFound();
  }

  const {
    data: { title, date, body: Content },
  } = post;

  const dateString = date.toDateString();
  const formattedDate = formatDate(dateString, FULL_DATE_FORMAT);

  return (
    <div>
      <div className="mb-6">
        <BackButton href="/blog">Blog</BackButton>
      </div>

      <div className="mb-12">
        <h1 className="text-base font-medium">{title}</h1>
        <p className="text-neutral-500">{formattedDate}</p>
      </div>

      <div>
        <Content components={getMDXComponents()} />
      </div>
    </div>
  );
}
