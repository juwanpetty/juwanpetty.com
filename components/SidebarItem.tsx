"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/shared/Icons";
import { cn } from "@/utilities/mergeClassNames";
import { isCurrentPath } from "@/utilities/isCurrentPath";
import { createElement } from "react";

type SidebarItemProps = {
  href?: string;
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

  const innerContent = (
    <span
      className={cn(
        "flex h-8 items-center justify-start gap-2 rounded-[0.625rem] border border-solid border-transparent px-3 transition-colors hover:bg-stone-50",
        {
          "border-stone-200 bg-stone-50": href && isCurrentPath(pathName, href),
        }
      )}
    >
      <span className="flex grow items-center justify-start gap-2">
        {leadingVisualMarkup}
        <span
          className={cn(
            "text-sm font-medium text-stone-500 transition-all hover:font-medium hover:text-stone-800",
            {
              "font-medium text-stone-800":
                href && isCurrentPath(pathName, href),
            }
          )}
        >
          {label}
        </span>
        {trailingVisualMarkup}
      </span>
      {trailingAction}
    </span>
  );

  if (!href) {
    return (
      <button type="button" onClick={onClick}>
        {innerContent}
      </button>
    );
  }

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {innerContent}
    </a>
  ) : (
    <Link href={href} onClick={onClick}>
      {innerContent}
    </Link>
  );
}
