import Image, { type ImageProps } from "next/image";
import type { MDXComponents } from "mdx/types";
import { ReactNode } from "react";
import { cn } from "@/utilities/merge-classnames";

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
    h1: ({ children, ...props }: React.ComponentProps<"h1">) => {
      const id = generateId(getTextContent(children));
      return (
        <h1 id={id} className="mb-6 scroll-m-4 text-xl font-medium" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
      const id = generateId(getTextContent(children));
      return (
        <h2
          id={id}
          className="mt-16 mb-6 scroll-m-4 text-base font-medium"
          {...props}
        >
          {children}
        </h2>
      );
    },
    p: ({ children, ...props }: React.ComponentProps<"p">) => {
      return (
        <p
          className="text-base/7.5 text-pretty text-neutral-900/85 not-last:mb-10 dark:text-white/85"
          {...props}
        >
          {children}
        </p>
      );
    },
    pre: ({ children, ...props }: React.ComponentProps<"pre">) => {
      return (
        <pre
          className="my-7 overflow-auto rounded-xl bg-neutral-50 py-4 text-sm text-red-500 md:my-7 dark:bg-[#0D0D0C]"
          {...props}
        >
          {children}
        </pre>
      );
    },
    code: ({ className, ...props }: React.ComponentProps<"code">) => {
      return (
        <code
          className={cn(
            "rounded-sm border border-black/15 bg-black/6 px-1 text-sm text-neutral-600 dark:border-white/15 dark:bg-white/8 dark:text-white/70",
            className
          )}
          {...props}
        />
      );
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
