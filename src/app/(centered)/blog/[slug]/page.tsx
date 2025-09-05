import { getBlog, getBlogSlugs } from "@/features/blog/utilities";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const { content: Content } = await getBlog(slug);

  return (
    <div>
      <Content />
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}
