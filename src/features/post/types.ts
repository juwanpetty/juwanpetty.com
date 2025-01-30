import { ReactElement } from "react";

export type Post = {
  frontmatter: Frontmatter;
  content: ReactElement;
  slug: string;
};

export type Frontmatter = {
  title: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
}