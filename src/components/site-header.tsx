"use client";

import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";
import { homePath } from "@/paths";
import { Link } from "next-view-transitions";
import { ComponentProps, Fragment, useState } from "react";

const navigation = [
  { name: "Blog", href: homePath() },
  { name: "Projects", href: homePath() },
  { name: "Components", href: homePath() },
];

export function SiteHeader() {
  const [isMobileDialogOpen, setIsMobileDialogOpen] = useState(false);

  return (
    <Fragment>
      <header className="sticky top-0 z-10 bg-white">
        <div className="mx-auto flex h-14 w-full items-center gap-3 px-6">
          {/* <button
            type="button"
            aria-label="Open mobile navigation"
            className="inline-flex items-center justify-center rounded-md md:hidden"
          >
            <Icon name="menu" className="size-6" />
          </button> */}

          <Link href={homePath()} className="inline-flex items-center gap-2.5">
            <Icon name="logo" className="size-5" />
            <span className="text-sm font-medium">Fumadocs</span>
          </Link>

          <div className="flex h-6 items-center rounded-full bg-neutral-200 px-1">
            <span className="px-2 text-xs font-medium text-neutral-500">
              v2.8.4
            </span>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <nav className="flex items-center gap-2 px-6 max-sm:hidden">
              {navigation.map((item) => (
                <NavigationLink
                  key={`${item.href}-${item.name}`}
                  href={item.href}
                >
                  {item.name}
                </NavigationLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <MobileNavigation />
    </Fragment>
  );
}

function MobileNavigation() {
  // TODO: Add mobile navigation dialog

  return null;
}

type NavigationLinkProps = ComponentProps<typeof Link> & {};

function NavigationLink({ children, ...props }: NavigationLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "p-2 text-sm font-medium text-neutral-500 transition-colors",
        "hover:text-neutral-800"
      )}
    >
      {children}
    </Link>
  );
}
