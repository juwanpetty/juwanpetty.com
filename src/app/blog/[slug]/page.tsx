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
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <div className="mx-auto w-full max-w-[730px] grow px-3 pt-36 pb-8 md:px-5 lg:px-8">
          <BlogHeader title={title} datePublished={datePublished} />

          <div className="py-8">{content}</div>

          <RelatedPosts posts={sortedPosts} />
        </div>
      </main>
    </div>
  );
}
