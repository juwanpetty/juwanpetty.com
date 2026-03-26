import { cn, generateId } from "@/lib/utils";
import { ComponentProps, HTMLAttributes } from "react";

export const mdxComponents = {
  h1: ({ className, ...props }: ComponentProps<"h1">) => (
    <h1
      className={cn(
        "text-secondary-foreground mt-2 text-base/7 font-[550] tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentProps<"h2">) => {
    return (
      <h2
        id={generateId(props.children)}
        className={cn(
          "text-secondary-foreground mt-14 mb-5 inline-block text-base font-[550] no-underline",
          className
        )}
        {...props}
      />
    );
  },
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn(
        "decoration-muted-foreground/25 font-normal underline decoration-2 underline-offset-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p
      className={cn(
        "text-secondary-foreground/80 mb-6.5 text-base leading-[1.65] text-pretty",
        className
      )}
      {...props}
    />
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
        className="bg-secondary/20 border-border relative my-6 overflow-auto rounded-xl border p-6 text-[0.8125rem]/5 md:p-4"
        {...props}
      />
    </>
  ),
};
