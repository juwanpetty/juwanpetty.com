import { CenteredLayout } from "@/components/centered-layout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <CenteredLayout>{children}</CenteredLayout>;
}
