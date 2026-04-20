import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconLinkOutline18 } from "nucleo-ui-outline-18";
import { ComponentProps, HTMLAttributes } from "react";

import type { MDXComponents } from "mdx/types";

export const components: MDXComponents = {
  h1: ({ className, ...props }: ComponentProps<"h1">) => (
    <h1
      className={cn("max-w-3xl text-xl font-semibold text-balance", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps<"h2">) => {
    return (
      <h2
        className={cn(
          "flex scroll-mt-8 flex-row items-center gap-2",
          className
        )}
        {...props}
      >
        <a
          href={`#${props.id}`}
          className="group not-prose relative text-base font-semibold no-underline"
        >
          <IconLinkOutline18
            className="text-muted-foreground/75 absolute top-1 -left-6 size-4 shrink-0 -translate-y-px rotate-90 opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="Link to section"
          />

          {props.children}
        </a>
      </h2>
    );
  },
  a: ({ className, href, children, ...props }: ComponentProps<"a">) => {
    if (!href) return <>{children}</>;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={cn(
            "text-gray-12 decoration-gray-11/25 font-medium underline underline-offset-3",
            className
          )}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(
          "text-gray-12 decoration-gray-11/25 font-medium underline underline-offset-3",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  },
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p className={cn("mb-4 text-base leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  figcaption: ({ ...props }: ComponentProps<"figcaption">) => (
    <figcaption className="flex items-center justify-between rounded-t-lg border-x border-t border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
      <span className="text-sm text-zinc-700 dark:text-zinc-300">
        {props.children}
      </span>
      {/* TODO: Add copy button */}
    </figcaption>
  ),
  pre: ({ ...props }: ComponentProps<"pre">) => (
    <>
      <pre
        className="bg-gray-1 dark:bg-gray-2 border-gray-6 relative my-6 overflow-auto rounded-xl border p-4 py-8 text-[0.8125rem]/5 md:p-6"
        {...props}
      />
    </>
  ),
  code: ({ ...props }: ComponentProps<"code">) => {
    if (typeof props.children === "string") {
      return (
        <code
          className="border-gray-6 bg-gray-1 dark:bg-gray-2 text-s text-gray-11 rounded-md border px-1.5 py-0.5 leading-relaxed font-normal"
          {...props}
        />
      );
    }

    return <code {...props} />;
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
