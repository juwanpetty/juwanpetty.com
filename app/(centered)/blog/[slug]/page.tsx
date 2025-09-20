import { Icon } from "@/components/icon";
import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { homePath } from "@/lib/paths";
import Link from "next/link";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const { content: Content } = await getBlog(slug);

  return (
    <div>
      <Link
        href={homePath()}
        className="mb-15 flex items-center gap-x-2 text-sm font-medium"
      >
        <Icon name="arrow-left" className="size-4 text-neutral-500" />
        <span className="text-neutral-700 underline decoration-neutral-200 underline-offset-3 transition-colors hover:decoration-neutral-700">
          Back
        </span>
      </Link>

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}

export const dynamicParams = false;
