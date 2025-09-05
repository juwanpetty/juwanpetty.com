import { Icon } from "@/components/icon";
import { ComponentProps } from "react";

type ExternalLinkProps = ComponentProps<"a"> & {
  href: string;
};

export function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline pr-5.5 text-sky-600 underline underline-offset-2"
    >
      {children}
      <span
        aria-hidden
        className="absolute ml-1 inline-flex h-[1lh] items-center"
      >
        <Icon name="external" className="size-4 text-neutral-400" />
      </span>
    </a>
  );
}
