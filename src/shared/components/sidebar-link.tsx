"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/utilities/merge-classnames";
import { usePathname } from "next/navigation";
import { isMatchingPath } from "@/shared/utilities/is-current-route";

type Props = {
  href: string;
  children: ReactNode;
};

export function SidebarLink({ href, children }: Props) {
  const pathName = usePathname();
  const isActiveRoute = isMatchingPath({
    pathName,
    href,
  });

  return (
    <Link
      href={href}
      className={cn(
        "flex h-8 w-full items-center rounded-[0.625rem] px-2 text-sm font-medium text-stone-500 transition-colors",
        { "bg-stone-100 text-stone-900": isActiveRoute }
      )}
    >
      {children}
    </Link>
  );
}
