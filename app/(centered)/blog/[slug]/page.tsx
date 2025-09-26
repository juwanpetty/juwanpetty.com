import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { formatDate } from "@/lib/utils";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const { content: Content, title, date } = await getBlog(slug);

  return (
    <div>
      <header className="mb-15">
        <h1 className="mb-5 text-base font-semibold text-neutral-800">
          {title}
        </h1>

        <p className="mb-5 text-base leading-relaxed text-neutral-800">
          {formatDate(date)}
        </p>
      </header>

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}

export const dynamicParams = false;
