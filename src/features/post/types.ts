import { ReactElement } from "react";

export type Post = {
  frontmatter: {
    title: string;
    publishedAt: string;
    summary: string;
    tags: string[];
  },
  content: ReactElement;
  slug: string;
};