import { Icon } from "@/components/icon";
import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { homePath } from "@/paths";
import { Link } from "next-view-transitions";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { content: Content } = await getBlog(slug);

  return (
    <div>
      <Link
        href={homePath()}
        className="mb-15 flex items-center gap-x-2 text-sm font-medium"
      >
        <Icon name="arrow-left" className="size-4 text-neutral-500" />
        <span className="text-neutral-700">Back to home</span>
      </Link>

      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}
