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

const projects = defineCollection({
  name: "projects",
  directory: "src/content/projects",
  include: "**/*.md",
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    published: z.coerce.date(),
    url: z.url(),
    image: z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    content: z.string(),
  }),
});

const works = defineCollection({
  name: "works",
  directory: "src/content/works",
  include: "**/*.md",
  schema: z.object({
    title: z.string().max(60),
    published: z.coerce.date(),
    image: z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    previewUrl: z.url().optional(),
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
    logo: z.string().optional(),
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

export default defineConfig({
  content: [posts, jobs, projects, works],
});
