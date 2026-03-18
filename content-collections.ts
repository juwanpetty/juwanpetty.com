import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/posts",
  include: "**/*.mdx",
  schema: z.object({
    published: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const notes = defineCollection({
  name: "notes",
  directory: "src/content/notes",
  include: "**/*.md",
  schema: z.object({
    published: z.coerce.date(),
    title: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
});

const crafts = defineCollection({
  name: "crafts",
  directory: "src/content/crafts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    previewURL: z.string(),
    repositoryURL: z.string(),
    content: z.string(),
  }),
});

const jobs = defineCollection({
  name: "jobs",
  directory: "src/content/jobs",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tools: z.array(z.string()).optional(),
    projects: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          link: z.string(),
          published: z.coerce.date().optional(),
        })
      )
      .optional(),
  }),
});

export default defineConfig({
  content: [posts, notes, crafts, jobs],
});
