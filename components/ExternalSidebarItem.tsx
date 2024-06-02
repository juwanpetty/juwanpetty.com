import React from "react";
import { Icons } from "@/shared/Icons";

type Props = {
  href: string;
  content: string;
};

export function ExternalSidebarItem({ href, content }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-7 items-center justify-start gap-2 px-2 text-stone-300"
    >
      <span className="flex-grow text-sm text-stone-500 transition-all hover:text-stone-800">
        {content}
      </span>
      <Icons.External size={16} />
    </a>
  );
}
