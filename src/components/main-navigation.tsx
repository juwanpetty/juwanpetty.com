"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/utilities/merge-classnames";
import { usePathname } from "next/navigation";
import { isMatchingPath } from "@/utilities/is-current-route";

export function MainNavigation() {
  return (
    <nav className="flex items-center gap-4 text-sm xl:gap-6">
      <NavigationItem href="/">Explore</NavigationItem>
      <NavigationItem href="/blog">Writing</NavigationItem>
      <NavigationItem href="/projects">Projects</NavigationItem>
    </nav>
  );
}

interface NavigationItemProps {
  href: string;
  children: ReactNode;
}

function NavigationItem({ href, children }: NavigationItemProps) {
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
        { "text-neutral-900": isActiveRoute }
      )}
    >
      {children}
    </Link>
  );
}
