import { Breadcrumb } from "@/components/breadcrumb";
import {
  compileMDXContent,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/get-mdx-data";
import { BLOG_DIRECTORY } from "@/constants";
import { mdxComponents } from "@/components/mdx-components";
import { SiteHeader } from "@/components/site-header";
import { formatDate } from "@/utilities/format-date";

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
  const { content, frontmatter } = await compileMDXContent(
    mdxContent,
    mdxComponents
  );

  const { title, datePublished } = frontmatter;
  const formattedDate = formatDate(datePublished, "MMMM dd, yyyy");

  const breadcrumbLinks = [
    { name: "Home", href: "/" },
    { name: "Writing", href: "/blog" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-[730px] px-5 pt-5 pb-15 md:pt-15 md:pb-32 lg:px-0">
          <div className="mb-4">
            <Breadcrumb links={breadcrumbLinks} />
          </div>

          <header className="my-[10px] md:my-5">
            <h1 className="text-[26px] font-bold text-balance md:text-[42px]">
              {title}
            </h1>
            {/* <div className="flex items-center justify-between text-sm">
              <time dateTime={formattedDate} className="text-neutral-500">
                {formattedDate}
              </time>
            </div> */}
          </header>

          <div className="pt-8">{content}</div>
        </div>
      </main>
    </div>
  );
}
