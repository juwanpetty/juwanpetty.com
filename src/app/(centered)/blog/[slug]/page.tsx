import { Icon } from "@/components/icon";
import { LoginButtonPlayground } from "@/features/blog/components/login-button";
import { TextReveal } from "@/features/blog/components/text-reveal";
import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import { homePath } from "@/lib/paths";
import { Link } from "next-view-transitions";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const { content } = await getBlog(slug, {
    LoginButtonPlayground,
    TextReveal,
  });

  return (
    <div>
      <Link
        href={homePath()}
        className="mb-15 flex items-center gap-x-2 text-sm font-medium"
      >
        <Icon name="arrow-left" className="size-4 text-neutral-500" />
        <span className="text-neutral-700">Back to home</span>
      </Link>

      {content}
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}
