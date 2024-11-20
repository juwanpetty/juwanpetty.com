"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/shared/utilities/merge-classnames";
import { usePathname } from "next/navigation";
import { isMatchingPath } from "@/shared/utilities/is-current-route";

type NavigationItemProps = {
  href: string;
  children: ReactNode;
};

export function NavigationItem({ href, children }: NavigationItemProps) {
  const pathName = usePathname();
  const isActiveRoute = isMatchingPath({
    pathName,
    href,
  });

  return (
    <Link
      href={href}
      className={cn(
        "text-neutral-500 transition-colors hover:text-neutral-900",
        { "text-neutral-900": isActiveRoute },
      )}
    >
      {children}
    </Link>
  );
}
