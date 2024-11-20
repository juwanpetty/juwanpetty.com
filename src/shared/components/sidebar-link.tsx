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
        "flex w-full items-center px-2 py-1 text-foreground text-neutral-500 underline-offset-2 transition-colors hover:text-neutral-900 hover:underline",
        { "text-neutral-900 underline": isActiveRoute },
      )}
    >
      {children}
    </Link>
  );
}
