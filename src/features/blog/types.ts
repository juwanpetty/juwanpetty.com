import { ReactElement } from "react";

export type Post = {
  frontmatter: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  },
  content: ReactElement;
  slug: string;
};