"use client";

import { Icons } from "@/components/icons";
import { isMatchingPath } from "@/utilities/is-current-route";
import { cn } from "@/utilities/merge-classnames";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export function Header() {
  return (
    <header className="flex h-(--header-height) items-center gap-4 border-b border-solid border-neutral-200 px-4 sm:justify-between sm:gap-0 md:justify-normal">
      <Link className="flex items-center space-x-2 md:mr-4 lg:mr-6" href="/">
        <Icons.logo className="h-6 w-6 text-neutral-400" />
      </Link>

      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <NavigationItem href="/">Explore</NavigationItem>
        <NavigationItem href="/blog">Writing</NavigationItem>
      </nav>
    </header>
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
        "text-neutral-700 transition-colors hover:text-neutral-900",
        { "text-neutral-900": isActiveRoute }
      )}
    >
      {children}
    </Link>
  );
}
