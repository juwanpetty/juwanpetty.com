import { ReactNode } from "react";

export type BlogMetadata = {
  title: string;
  slug: string;
  description: string;
  date: string;
  draft?: boolean;
  tags?: string[];
};

export type Blog = BlogMetadata & {
  slug: string;
  content: ReactNode;
};
