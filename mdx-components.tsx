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
          "text-secondary-foreground mt-12 mb-6 text-base font-[550] tracking-tight no-underline",
          className
        )}
        {...props}
      />
    );
  },
  a: ({ className, ...props }: ComponentProps<"a">) => (
    <a
      className={cn("underline decoration-1 underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentProps<"p">) => (
    <p
      className={cn(
        "text-secondary-foreground text-[0.9375rem]/[1.6875rem] text-pretty",
        // "text-secondary-foreground text-base/7 text-pretty",
        className
      )}
      {...props}
    />
  ),
  strong: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
};
