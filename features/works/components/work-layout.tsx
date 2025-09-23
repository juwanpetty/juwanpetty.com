import { PropsWithChildren } from "react";

export function WorkLayout({ children }: PropsWithChildren) {
  return <article className="leading-relaxed">{children}</article>;
}
