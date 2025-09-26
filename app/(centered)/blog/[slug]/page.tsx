import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/utils";

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
      <header className="mb-12">
        <h1 className="mb-3 text-[1.75rem] leading-8 font-semibold text-neutral-800">
          {title}
        </h1>

        <p className="text-sm font-medium text-neutral-500">
          {formatDate(date, FULL_DATE_FORMAT)}
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
