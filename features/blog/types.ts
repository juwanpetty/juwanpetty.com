import { ReactElement } from "react";

export type BlogMetadata = {
  title: string;
  description: string;
  date: string;
};

export type Blog = BlogMetadata & {
  slug: string;
  content: ReactElement;
};
