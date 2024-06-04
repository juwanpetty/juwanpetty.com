"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/shared/Icons";
import { cn } from "@/utilities/mergeClassNames";
import { isCurrentPath } from "@/utilities/isCurrentPath";

type SidebarItemProps = {
  href: string;
  content: string;
  isExternal?: boolean;
  onClick?: () => void;
};

export function SidebarItem({
  href,
  content,
  isExternal,
  onClick,
}: SidebarItemProps) {
  const pathName = usePathname();

  return isExternal ? (
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
  ) : (
    <Link
      href={href}
      className="flex h-7 w-full items-center justify-start gap-2 px-2 text-stone-300"
      onClick={onClick}
    >
      <span
        className={cn(
          "flex-grow text-sm text-stone-500 transition-all hover:font-medium hover:text-stone-800",
          { "font-medium text-stone-800": isCurrentPath(pathName, href) }
        )}
      >
        {content}
      </span>
    </Link>
  );
}
