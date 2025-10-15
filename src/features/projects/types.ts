import { ReactNode } from "react";

export type ProjectMetadata = {
  title: string;
  description?: string;
  date: string;
  draft?: boolean;
  demoURL?: string;
  repoURL?: string;
  thumbnail: string;
};

export type Project = ProjectMetadata & {
  slug: string;
  content: ReactNode;
};
