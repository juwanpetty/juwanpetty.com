import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainLayout({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <SiteHeader />

      <div className="px-4 pt-16 pb-24 sm:px-6">{children}</div>
    </div>
  );
}
