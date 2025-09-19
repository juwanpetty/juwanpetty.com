import { Blog, BlogMetadata } from "@/features/blog/types";
import { getSlugsFromDirectory, readMDXFile } from "@/lib/mdx-utils";
import { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { getMDXComponents } from "@/../mdx-components";

const contentDir = path.join(process.cwd(), "src/content/blog");

async function compileBlogContent(content: string, components?: MDXComponents) {
  return compileMDX<BlogMetadata>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
    components: {
      ...getMDXComponents(components),
    },
  });
}

export async function getBlog(slug: string, components?: MDXComponents) {
  const content = await readMDXFile(contentDir, slug);

  return compileBlogContent(content, components);
}

export async function getBlogs() {
  const slugs = await getSlugsFromDirectory(contentDir);

  const blogs = await Promise.all(
    slugs.map(async ({ slug }) => {
      const { frontmatter, content } = await getBlog(slug);
      return {
        slug,
        content,
        ...frontmatter,
      } as Blog;
    })
  );

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
