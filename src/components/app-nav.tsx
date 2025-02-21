"use client";

import Link from "next/link";
import { cn } from "@/utilities/merge-classnames";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { isMatchingPath } from "@/utilities/is-current-route";
import { appConfig } from "@/config/app";

export function AppNav() {
  const navigation = appConfig.sidebarNavigation;

  return navigation.length ? (
    <div className="flex flex-col gap-6">
      {navigation.map((section, index) => (
        <div key={index}>
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          <div className="flex flex-col gap-0.5 text-sm">
            {section?.items?.length && (
              <div className="flex flex-col gap-0.5">
                {section.items.map((item, index) => (
                  <SidebarLink key={index} href={item.href || ""}>
                    {item.title}
                  </SidebarLink>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

interface SidebarLinkProps {
  href: string;
  children: ReactNode;
}

export function SidebarLink({ href, children }: SidebarLinkProps) {
  const pathName = usePathname();
  const isActiveRoute = isMatchingPath({
    pathName,
    href,
  });

  return (
    <Link
      href={href}
      className={cn(
        "flex w-full items-center px-2 py-1 text-neutral-500 underline-offset-2 transition-colors hover:text-neutral-900 hover:underline",
        { "text-neutral-900 underline": isActiveRoute }
      )}
    >
      {children}
    </Link>
  );
}
