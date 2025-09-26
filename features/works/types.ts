import { ElementType } from "react";

export type WorkMetadata = {
  title: string;
  summary: string;
  description?: string;
  date: string;
  website?: string;
  repository?: string;
  thumbnail: string;
};

export type Work = WorkMetadata & {
  slug: string;
  content: ElementType;
};
