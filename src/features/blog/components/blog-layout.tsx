import { PropsWithChildren } from "react";

export function BlogLayout({ children }: PropsWithChildren) {
  return <article className="leading-relaxed">{children}</article>;
}
