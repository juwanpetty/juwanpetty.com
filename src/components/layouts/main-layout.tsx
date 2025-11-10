import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainLayout({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <SiteHeader />
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </div>
  );
}
