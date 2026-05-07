import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  rehypePrettyCode,
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const rehypePrettyCodeOptions: PrettyCodeOptions = {
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
      rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
    });
    return {
      ...document,
      mdx,
    };
  },
});

const experiments = defineCollection({
  name: "experiments",
  directory: "src/content/experiments",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    published: z.coerce.date(),
    technologies: z.array(z.string()).optional(),
    githubUrl: z.url(),
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
    content: z.string(),
  }),
});

const components = defineCollection({
  name: "components",
  directory: "src/content/components",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    draft: z.boolean().optional(),
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

export default defineConfig({
  content: [posts, experiments, jobs, components],
});
