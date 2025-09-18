import { SidebarLayout } from "@/components/sidebar-layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <SidebarLayout>{children}</SidebarLayout>;
}
