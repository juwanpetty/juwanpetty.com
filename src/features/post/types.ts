import { ReactElement } from "react";

export type Post = {
  frontmatter: Frontmatter;
  content: ReactElement;
  slug: string;
};

export type Frontmatter = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
}