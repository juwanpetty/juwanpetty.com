import { JSXElementConstructor, ReactElement } from "react";

export type Post = {
  frontmatter: {
    title: string;
    publishedAt: string;
  };
  content: ReactElement<any, string | JSXElementConstructor<any>>;
  slug: string;
}