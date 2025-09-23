import { WorkLayout } from "@/features/works/components/work-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <WorkLayout>{children}</WorkLayout>;
}
