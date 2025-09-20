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
    figure: ({ children, ...props }: ComponentProps<"figure">) => (
      <figure className="my-8" {...props}>
        {children}
      </figure>
    ),
    figcaption: ({ children, ...props }: ComponentProps<"figcaption">) => (
      <figcaption
        className="ring-b-0 flex h-10 items-center rounded-t-lg border border-neutral-200 bg-neutral-50 px-4 text-sm font-medium text-neutral-500"
        {...props}
      >
        {children}
      </figcaption>
    ),
    pre: ({ children, ...props }: ComponentProps<"pre">) => {
      console.log("Props", props);

      return (
        <pre
          className="relative rounded-lg border border-neutral-200 px-0 py-4 font-mono text-sm shadow-xs [&_*]:font-mono [figcaption[data-rehype-pretty-code-title]~&]:rounded-t-none [figcaption[data-rehype-pretty-code-title]~&]:border-t-0"
          {...props}
        >
          {children}
        </pre>
      );
    },
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

export function useMDXComponents(): MDXComponents {
  return getMDXComponents();
}
