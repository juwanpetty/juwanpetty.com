import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { ExternalLink } from "@/components/external-link";

function getTextContent(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!node) return "";

  if (Array.isArray(node)) {
    return node.map(getTextContent).join("");
  }

  if (typeof node === "object" && "props" in node) {
    return getTextContent(
      (node as { props: { children: ReactNode } }).props.children
    );
  }

  return "";
}

function generateId(text: string) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }: ComponentProps<"h1">) => {
      const id = generateId(getTextContent(children));
      return (
        <h1 id={id} className="mb-6 text-lg font-[550] text-balance" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: ComponentProps<"h2">) => {
      const id = generateId(getTextContent(children));
      return (
        <h2 id={id} className="mt-16 mb-6 font-[550]" {...props}>
          {children}
        </h2>
      );
    },
    p: ({ children, ...props }: ComponentProps<"p">) => {
      return (
        <p
          className="mb-5 text-pretty text-neutral-700 dark:text-neutral-500"
          {...props}
        >
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
            className="rounded-md border border-neutral-200 px-1 py-0.5 text-sm leading-relaxed dark:border-neutral-600"
            {...props}
          />
        );
      }

      return <code {...props} />;
    },
    ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
      <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }: React.ComponentProps<"li">) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    Image: (props: ImageProps) => (
      <Image
        className="mobile-full-width relative my-6 flex w-full justify-center overflow-hidden rounded-xl bg-white md:my-8"
        {...props}
      />
    ),
  };
}
