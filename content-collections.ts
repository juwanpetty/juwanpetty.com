import { parseDate } from "@/lib/dates";
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import {
  rehypePrettyCode,
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import { z } from "zod";

const rehypePrettyCodeOptions: PrettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

const notes = defineCollection({
  name: "notes",
  directory: "src/content/notes",
  include: "**/*.mdx",
  schema: z.object({
    published: z.string().transform((str) => parseDate(str)),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
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
    published: z.string().transform((str) => parseDate(str)),
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
    published: z.string().transform((str) => parseDate(str)),
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
    startDate: z.string().transform((str) => parseDate(str)),
    endDate: z
      .string()
      .transform((str) => parseDate(str))
      .optional(),
    tools: z.array(z.string()).optional(),
    projects: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          link: z.string(),
          published: z
            .string()
            .transform((str) => parseDate(str))
            .optional(),
        })
      )
      .optional(),
    content: z.string(),
  }),
});

export default defineConfig({
  content: [notes, jobs, projects, works],
});
