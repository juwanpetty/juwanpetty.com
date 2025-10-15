import { Blog, BlogMetadata } from "@/features/blog/types";
import { getSlugsFromDirectory, readMDXFile } from "@/lib/mdx-utils";
import { getMDXComponents } from "@/mdx-components";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import path from "path";

const contentDir = path.join(process.cwd(), "src/content/blog");

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

export async function getBlog(slug: string) {
  const { content, frontmatter } = await compileMDX<BlogMetadata>({
    source: await readMDXFile(contentDir, slug),
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
      },
    },
    components: getMDXComponents(),
  });

  return {
    slug,
    content,
    ...frontmatter,
  } as Blog;
}

export async function getBlogs() {
  const slugs = await getSlugsFromDirectory(contentDir);

  const blogs = await Promise.all(slugs.map(async ({ slug }) => getBlog(slug)));

  return [...blogs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA === dateB) {
      return a.title.localeCompare(b.title);
    }

    return dateB - dateA;
  });
}

export async function getBlogSlugs() {
  return getSlugsFromDirectory(contentDir);
}
