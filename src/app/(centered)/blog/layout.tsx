import { BlogLayout } from "@/features/blog/components/blog-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <BlogLayout>{children}</BlogLayout>;
}
