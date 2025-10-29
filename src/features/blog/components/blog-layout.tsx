import { BackButton } from "@/components/back-button";
import { homePath } from "@/lib/paths";
import { PropsWithChildren } from "react";

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <article className="leading-relaxed">
      <div className="mb-24">
        <BackButton href={homePath()}>Back</BackButton>
      </div>

      {children}
    </article>
  );
}
