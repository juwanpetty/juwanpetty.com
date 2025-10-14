import { ProjectLayout } from "@/features/projects/components/project-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <ProjectLayout>{children}</ProjectLayout>;
}
