import { defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import { z } from "zod";

const rehypePrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

export const blogPosts = defineCollections({
  type: "doc",
  dir: "src/content/blog",
  schema: frontmatterSchema.extend({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

export const projectPosts = defineCollections({
  type: "doc",
  dir: "src/content/projects",
  schema: frontmatterSchema.extend({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    demoURL: z.url().optional(),
    repoURL: z.url().optional(),
    thumbnail: z.string(),
    draft: z.boolean().optional(),
  }),
});
