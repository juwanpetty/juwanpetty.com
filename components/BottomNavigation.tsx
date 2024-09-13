"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath } from "@utilities/is-current-path";
import { cn } from "@utilities/merge-classnames";
import { NavLinkProps } from "@/types/types";

function NavLink({ href, children, hrefMatches }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-sand-8 hover:text-sand-9 flex aspect-video h-full items-center justify-center gap-1 px-2",
        {
          "text-sand-12 hover:text-sand-12": isCurrentPath({
            pathName,
            href: hrefMatches || [href],
          }),
        }
      )}
    >
      {children}
    </Link>
  );
}

export function BottomNavigation() {
  return (
    <div className="border-sand-3 bg-sand-2 fixed bottom-0 left-0 z-10 flex h-[var(--bottom-nav-height)] w-full items-center justify-center gap-6 border-t border-solid px-4 py-2 sm:hidden">
      <NavLink href="/" hrefMatches={["/", "/writing"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="size-4 min-w-4"
        >
          <g fill="currentColor">
            <path d="M15.25,16h-6.25c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h6.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" />
            <path d="M11.414,2.848L3.605,10.657c-.863,.864-1.401,3.406-1.593,4.459-.044,.242,.034,.491,.208,.665,.142,.142,.333,.22,.53,.22,.044,0,.089-.004,.134-.012,1.053-.191,3.595-.729,4.459-1.593l7.809-7.809c1.03-1.031,1.03-2.707,0-3.738-.998-.998-2.739-.997-3.738,0Z" />
          </g>
        </svg>
        <span className="text-sm font-medium">Writing</span>
      </NavLink>
      <NavLink href="/projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="size-4 min-w-4"
        >
          <g fill="currentColor">
            <path d="M15.75,9.844c-.414,0-.75-.336-.75-.75v-2.844c0-.689-.561-1.25-1.25-1.25h-5.386c-.228,0-.443-.104-.585-.281l-.603-.752c-.238-.297-.594-.467-.975-.467h-1.951c-.689,0-1.25,.561-1.25,1.25v4c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V4.75c0-1.516,1.233-2.75,2.75-2.75h1.951c.838,0,1.62,.375,2.145,1.029l.378,.471h5.026c1.517,0,2.75,1.234,2.75,2.75v2.844c0,.414-.336,.75-.75,.75Z" />
            <rect x="1.5" y="6" width="15" height="10" rx="2.75" ry="2.75" />
          </g>
        </svg>
        <span className="text-sm font-medium">Projects</span>
      </NavLink>
    </div>
  );
}
