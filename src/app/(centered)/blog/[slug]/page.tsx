import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/utils";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const { content, title, date } = await getBlog(slug);

  return (
    <div>
      <header className="mb-12 flex flex-col gap-1">
        <time className="text-sm text-neutral-500" dateTime={date}>
          {formatDate(date, SHORTHAND_DATE_FORMAT)}
        </time>

        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          {title}
        </h1>
      </header>

      {content}
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}

export const dynamicParams = false;
