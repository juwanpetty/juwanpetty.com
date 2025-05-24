import { Breadcrumb } from "@/components/breadcrumb";
import {
  compileMDXPostContent,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/get-mdx-data";
import { BLOG_DIRECTORY } from "@/constants";
import { mdxComponents } from "@/components/mdx-components";
import { SiteHeader } from "@/components/site-header";
import { formatDate } from "@/utilities/format-date";
import { Link } from "next-view-transitions";
import { Icons } from "@/components/icons";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdxContent = await readMDXFile(BLOG_DIRECTORY, slug);
  const { frontmatter } = await compileMDXPostContent(mdxContent);

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
  const { content, frontmatter } = await compileMDXPostContent(
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
      <nav className="fixed top-4 left-0 z-50 mx-auto flex w-full justify-center px-7 sm:top-6">
        <div className="flex h-12 w-full max-w-md items-center justify-between rounded-full bg-stone-800 py-1 pr-1 pl-3 shadow-xl">
          <Link href="/">
            <Icons icon="logo" className="size-7 text-white" />
          </Link>
        </div>
      </nav>

      <main className="grow">
        <div className="mx-auto w-full max-w-xl grow px-3 pt-36 pb-8 md:px-5 lg:px-8">
          <div className="mb-4">
            <Breadcrumb links={breadcrumbLinks} />
          </div>

          <header className="my-[10px] md:my-5">
            <h1 className="text-2xl leading-8 font-semibold tracking-[-0.3px]">
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
