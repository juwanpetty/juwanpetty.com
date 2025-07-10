import { SidebarLayout } from "@/components/sidebar-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <SidebarLayout>{children}</SidebarLayout>;
}
