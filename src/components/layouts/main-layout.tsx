import { SiteHeader } from "@/components/site-header";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainLayout({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <SiteHeader />
      {/* <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div> */}
      <div className="mx-auto w-full max-w-2xl pt-14.25">
        <div className="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
          <div className="mb-10 flex items-center justify-between">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
