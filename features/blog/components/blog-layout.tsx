import { BackButton } from "@/components/back-button";
import { PropsWithChildren } from "react";

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <article className="leading-relaxed">
      <BackButton />

      {children}
    </article>
  );
}
