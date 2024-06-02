"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utilities/mergeClassNames";
import { isCurrentPath } from "@/utilities/isCurrentPath";

type SidebarItemProps = {
  href: string;
  content: string;
};

export function SidebarItem({ href, content }: SidebarItemProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className="flex h-7 w-full items-center justify-start gap-2 px-2 text-stone-300"
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
