import {
  compileMDXPostContent,
  getAllPosts,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/mdx-utils";
import { BLOG_DIRECTORY } from "@/constants";
import { mdxComponents } from "@/components/mdx-components";
import { sortPostsByDateThenTitle } from "@/utilities/format-post-data";
import { BlogHeader } from "@/components/blog-header";
import { RelatedPosts } from "@/components/related-posts";
import { SiteHeader } from "@/components/site-header";
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

  const posts = await getAllPosts(BLOG_DIRECTORY, 3);
  const sortedPosts = sortPostsByDateThenTitle(posts);

  const { title, datePublished } = frontmatter;

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="grow">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="py-8">
            <div className="mx-auto flex w-full max-w-[730px] flex-col">
              {/* Breadcrumbs */}
              <nav className="mb-4 flex items-center gap-1.5">
                <Link
                  href="/"
                  className="text-sm leading-none text-neutral-500"
                >
                  Home
                </Link>
                <Icons icon="arrowRight" className="size-4 text-neutral-500" />
                <span className="text-sm leading-none">Blog</span>
              </nav>

              <BlogHeader title={title} datePublished={datePublished} />

              <div className="py-8">{content}</div>

              <RelatedPosts posts={sortedPosts} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
