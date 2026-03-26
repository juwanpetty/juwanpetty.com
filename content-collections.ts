import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { rehypePrettyCode, type Options } from "rehype-pretty-code";
import { z } from "zod";

const rehypeOptions: Options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.mdx",
  schema: z.object({
    published: z.coerce.date(),
    title: z.string().max(60),
    description: z.string().max(160),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
    });
    return {
      ...document,
      mdx,
    };
  },
});

const patterns = defineCollection({
  name: "patterns",
  directory: "src/content/patterns",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    published: z.coerce.date(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypePrettyCode, rehypeOptions]],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  content: [posts, patterns],
});
