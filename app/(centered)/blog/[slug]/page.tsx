import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/utils";

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
      <header className="mb-12 flex flex-col gap-1">
        <p className="text-sm font-medium text-neutral-500">
          {formatDate(date, SHORTHAND_DATE_FORMAT)}
        </p>

        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>
      </header>

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}

export const dynamicParams = false;
