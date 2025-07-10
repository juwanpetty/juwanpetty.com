import { url } from "@/lib/url";
import { clsx } from "clsx";
import { Link } from "next-view-transitions";
import { type LinkProps } from "next/link";
import type React from "react";

export function Breadcrumbs(props: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-x-2 text-sm/6"
      {...props}
    />
  );
}

export function BreadcrumbHome() {
  return (
    <Link
      href={url.index()}
      className="flex min-w-0 shrink-0 items-center gap-2.5 text-neutral-900 dark:text-white"
    >
      <span>Juwan Petty</span>
    </Link>
  );
}

export function Breadcrumb({
  href,
  children,
  className,
}: {
  href?: LinkProps["href"];
  children: React.ReactNode;
  className?: string;
}) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          className,
          "min-w-0 truncate text-neutral-900 dark:text-white"
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={clsx(
        className,
        "min-w-0 truncate text-neutral-900 last:text-neutral-500 dark:last:text-white/50"
      )}
    >
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span className={clsx(className, "text-black/30 dark:text-white/30")}>
      /
    </span>
  );
}
