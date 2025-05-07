import { Breadcrumb } from "@/components/breadcrumb";
import { SiteHeader } from "@/components/site-header";
import { ImagePlaceholder } from "@/components/image-placeholder";
import {
  compileMDXContent,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/get-mdx-data";
import { BLOG_DIRECTORY } from "@/constants";
import { format } from "date-fns";
import { Icons } from "@/components/icons";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdxContent = await readMDXFile(BLOG_DIRECTORY, slug);
  const { frontmatter } = await compileMDXContent(mdxContent);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export async function generateStaticParams() {
  const slugs = await getSlugsFromDirectory(BLOG_DIRECTORY);
  return slugs.map((slug) => ({ slug: slug.slug }));
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdxContent = await readMDXFile(BLOG_DIRECTORY, slug);
  const { content, frontmatter } = await compileMDXContent(mdxContent);

  const { title, datePublished } = frontmatter;
  const formattedDate = format(new Date(datePublished), "MMMM dd, yyyy");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-[730px] px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          <Breadcrumb links={breadcrumbLinks} />

          <h1 className="my-5 text-4xl font-bold tracking-tight">{title}</h1>

          <div className="mt-5 flex items-center gap-[30px] text-neutral-500">
            <div className="flex items-center gap-[6px]">
              <Icons icon="calendar" className="h-5 w-5" />
              <p className="text-[16px] leading-[22px] font-normal tracking-[-0.32px]">
                {formattedDate}
              </p>
            </div>
          </div>

          <ImagePlaceholder className="mt-5 aspect-video" />

          <div className="prose prose-neutral mt-8">{content}</div>
        </div>
      </main>
    </div>
  );
}
