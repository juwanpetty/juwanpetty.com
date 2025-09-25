import { Icon } from "@/components/icon";
import { homePath } from "@/lib/paths";
import Link from "next/link";
import { PropsWithChildren } from "react";

export function BlogLayout({ children }: PropsWithChildren) {
  return (
    <article className="leading-relaxed">
      <Link
        href={homePath()}
        className="mb-15 inline-flex items-center gap-x-2 text-base"
      >
        <Icon name="arrow-left" className="size-4.5 text-neutral-500" />
        <span className="text-neutral-800 underline decoration-neutral-200 underline-offset-3 transition-colors hover:decoration-neutral-700">
          Back
        </span>
      </Link>

      {children}
    </article>
  );
}
