import { Breadcrumb } from "@/components/breadcrumb";
import {
  compileMDXContent,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/get-mdx-data";
import { BLOG_DIRECTORY } from "@/constants";
import { format } from "date-fns";
import { mdxComponents } from "@/components/mdx-components";
import { Link } from "next-view-transitions";

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
  const formattedDate = format(new Date(datePublished), "MMMM dd, yyyy");

  const breadcrumbLinks = [{ name: "Blog", href: "/blog" }, { name: title }];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <div className="mx-auto max-w-[730px] px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          {/* <Breadcrumb links={breadcrumbLinks} /> */}
          <nav aria-label="breadcrumb">
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
              <li>
                <Link
                  href="/"
                  className="block size-6 rounded-full bg-[#08C6FF]"
                />
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>
              <li className="inline-flex items-center gap-1.5">
                <a
                  data-slot="breadcrumb-link"
                  className="text-neutral-500"
                  href="#"
                >
                  Components
                </a>
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>

              <li className="inline-flex items-center gap-1.5">
                <button
                  type="button"
                  id="radix-«r0»"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  data-slot="dropdown-menu-trigger"
                  className="cursor-pointer text-neutral-500"
                >
                  <span
                    data-slot="breadcrumb-ellipsis"
                    role="presentation"
                    aria-hidden="true"
                    className="flex size-5 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-ellipsis"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    <span className="sr-only">More</span>
                  </span>
                  <span className="sr-only">Toggle menu</span>
                </button>
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span
                  data-slot="breadcrumb-page"
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-neutral-900"
                >
                  {title}
                </span>
              </li>
            </ol>
          </nav>

          <h1 className="my-5 mt-16 text-base font-semibold">{title}</h1>

          <div>{content}</div>
        </div>
      </main>
    </div>
  );
}
