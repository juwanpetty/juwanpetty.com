import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const articles = defineCollection({
  name: "articles",
  directory: "src/content/articles",
  include: "**/*.md",
  schema: z.object({
    published: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
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
    published: z.coerce.date(),
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
});

export default defineConfig({
  collections: [articles, notes, crafts],
});
