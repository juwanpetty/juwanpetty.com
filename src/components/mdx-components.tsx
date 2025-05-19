import { JSX } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { MDXComponents } from "mdx/types";
import { cn } from "@/utilities/merge-classnames";

export const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={cn("large-text", className)}>
      {props.children}
    </h1>
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 scroll-m-20 text-base font-semibold first:mt-0",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-[1.65rem] not-first:mt-5", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn(
        "my-6 ml-6 list-decimal [div>&:first-child]:mt-0",
        className
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
};

export function MDXWrapper(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...mdxComponents, ...(props.components || {}) }}
    />
  );
}
