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
      className={cn("flex items-center gap-1 text-sand-8 hover:text-sand-9", {
        "text-sand-12 hover:text-sand-12": isCurrentPath({
          pathName,
          href: hrefMatches || [href],
        }),
      })}
    >
      {children}
    </Link>
  );
}

export function TopNavigation() {
  return (
    <header className="left-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center justify-center gap-6 border-b border-solid border-sand-2 bg-white px-4 dark:bg-neutral-900 sm:fixed sm:justify-start sm:border-sand-3">
      <Link href="/" className="flex items-center gap-1.5 text-sand-12">
        <svg
          width="28"
          height="20"
          viewBox="0 0 45 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-0.5"
        >
          <path
            d="M0.681372 22.1605L12.8866 1.48822C13.1191 1.09451 13.5424 0.852905 13.9997 0.852905H33.883C34.8834 0.852905 35.5046 1.94033 34.9961 2.80162L22.7908 23.4739C22.5583 23.8676 22.135 24.1092 21.6777 24.1092H1.79447C0.793992 24.1092 0.172854 23.0217 0.681372 22.1605Z"
            fill="currentColor"
          />
          <path
            d="M29.2624 24.109H43.1511C44.1257 24.109 44.7497 23.0718 44.2927 22.2112L37.7342 9.86141C37.2612 8.97088 35.9956 8.94086 35.481 9.80796L28.1508 22.1578C27.6397 23.019 28.2606 24.109 29.2624 24.109Z"
            fill="currentColor"
          />
        </svg>
        <span className="sr-only text-lg font-semibold sm:not-sr-only">
          Acme Corp
        </span>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto hidden w-min items-center gap-6 sm:flex">
        <NavLink href="/" hrefMatches={["/"]}>
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
    </header>
  );
}
