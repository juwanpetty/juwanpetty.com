import { ExternalLink } from "@/components/external-link";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ComponentProps } from "react";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: ComponentProps<"h1">) => {
      return (
        <h1 className="mb-6 text-lg font-[550] text-balance" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: ComponentProps<"h2">) => {
      return (
        <h2 className="mt-16 mb-6 font-[550]" {...props}>
          {children}
        </h2>
      );
    },
    p: ({ children, ...props }: ComponentProps<"p">) => {
      return (
        <p className="mb-5 text-pretty text-neutral-700" {...props}>
          {children}
        </p>
      );
    },
    a: ({ href = "", children, ...props }: ComponentProps<"a">) => {
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link href={href} {...props}>
            {children}
          </Link>
        );
      }
      return (
        <ExternalLink href={href} {...props}>
          {children}
        </ExternalLink>
      );
    },
    pre: ({ children }: ComponentProps<"pre">) => (
      <pre className="my-8 w-full overflow-x-auto rounded-xl border border-neutral-200 bg-white p-4 font-mono text-[0.8125rem] [&_*]:font-mono">
        {children}
      </pre>
    ),
    code: ({ ...props }: ComponentProps<"code">) => {
      if (typeof props.children === "string") {
        return (
          <code
            className="rounded-md border border-neutral-200 px-1 py-0.5 text-sm leading-relaxed"
            {...props}
          />
        );
      }

      return <code {...props} />;
    },
  };
}
