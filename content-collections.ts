import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const blogPosts = defineCollection({
  name: "blog",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    publishedDate: z.iso.date(),
    description: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const works = defineCollection({
  name: "works",
  directory: "content/works",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    publishedDate: z.iso.date(),
    summary: z.string(),
    description: z.string().optional(),
    year: z.string(),
    repository: z.url().optional(),
    website: z.url().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [blogPosts, works],
});
