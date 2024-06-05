"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/shared/Icons";
import { cn } from "@/utilities/mergeClassNames";
import { isCurrentPath } from "@/utilities/isCurrentPath";
import { createElement } from "react";

type SidebarItemProps = {
  href: string;
  label: string;
  isExternal?: boolean;
  onClick?: () => void;
  leadingVisual?: keyof typeof Icons;
  trailingVisual?: React.ReactNode;
  trailingAction?: React.ReactNode;
};

export function SidebarItem({
  href,
  label,
  onClick,
  isExternal,
  leadingVisual,
  trailingVisual,
  trailingAction,
}: SidebarItemProps) {
  const pathName = usePathname();

  const leadingVisualMarkup = leadingVisual
    ? createElement(Icons[leadingVisual], { className: "size-4" })
    : null;

  const trailingVisualMarkup = trailingVisual ? (
    <span className="flex items-center justify-center">{trailingVisual}</span>
  ) : null;

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className="flex h-8 items-center justify-start gap-2 rounded-[0.625rem] px-3 transition-colors hover:bg-stone-100">
        <span className="flex grow items-center justify-start gap-2">
          {leadingVisualMarkup}
          <span
            className={cn(
              "text-sm font-medium text-stone-500 transition-all hover:font-medium hover:text-stone-800",
              { "font-medium text-stone-800": isCurrentPath(pathName, href) }
            )}
          >
            {label}
          </span>
          {trailingVisualMarkup}
        </span>
        {trailingAction}
      </span>
    </a>
  ) : (
    <Link href={href} onClick={onClick}>
      <span className="flex h-8 items-center justify-start gap-2 rounded-[0.625rem] px-3 transition-colors hover:bg-stone-100">
        <span className="flex grow items-center justify-start gap-2">
          {leadingVisualMarkup}
          <span
            className={cn(
              "text-sm font-medium text-stone-500 transition-all hover:font-medium hover:text-stone-800",
              { "font-medium text-stone-800": isCurrentPath(pathName, href) }
            )}
          >
            {label}
          </span>
          {trailingVisualMarkup}
        </span>
        {trailingAction}
      </span>
    </Link>
  );
}
