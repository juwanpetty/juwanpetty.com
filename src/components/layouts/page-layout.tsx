import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function PageLayout({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <>
      <SiteHeader />
      <main className={cn("px-4 pt-10 pb-24 sm:px-6", className)} {...props}>
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
    </>
  );
}
