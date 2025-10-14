import { ElementType } from "react";

export type ProjectMetadata = {
  title: string;
  summary: string;
  description?: string;
  date: string;
  website?: string;
  repository?: string;
  thumbnail: string;
};

export type Project = ProjectMetadata & {
  slug: string;
  content: ElementType;
};
