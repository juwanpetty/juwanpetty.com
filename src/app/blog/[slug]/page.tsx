import {
  compileMDXPostContent,
  getAllPosts,
  getSlugsFromDirectory,
  readMDXFile,
} from "@/utilities/get-mdx-data";
import { BLOG_DIRECTORY } from "@/constants";
import { mdxComponents } from "@/components/mdx-components";
import { formatDate } from "@/utilities/format-date";
import { Link } from "next-view-transitions";
import { Icons } from "@/components/icons";
import { sortPostsByDateThenTitle } from "@/utilities/format-post-data";
import { PageSection, SectionHeader } from "@/components/page-section";
import { PostCard } from "@/components/post-card";

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
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <div className="mx-auto w-full max-w-[730px] grow px-3 pt-36 pb-8 md:px-5 lg:px-8">
          <header className="my-[10px] flex flex-col gap-3 md:my-5">
            <Link href="/" className="flex items-center gap-1">
              <Icons icon="arrowLeft" className="size-4 text-neutral-500" />
              <span className="text-sm font-medium tracking-[-0.1px] text-neutral-700">
                Back to Home
              </span>
            </Link>
            <h1 className="text-2xl leading-8 font-semibold tracking-[-0.3px]">
              {title}
            </h1>
            <div className="flex items-center justify-between text-sm">
              <time
                dateTime={formattedDate}
                className="text-sm font-medium tracking-[-0.1px] text-neutral-700"
              >
                {formattedDate}
              </time>
            </div>
          </header>

          <div className="py-8">{content}</div>

          <PageSection>
            <SectionHeader title="Latest writings" icon="penWriting2" />

            <div className="flex flex-col gap-5">
              {sortedPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.title}
                  datePublished={post.datePublished}
                  slug={post.slug}
                />
              ))}
            </div>
          </PageSection>
        </div>
      </main>
    </div>
  );
}
