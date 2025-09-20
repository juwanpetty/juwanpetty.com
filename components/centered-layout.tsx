import { SiteHeader } from "@/components/site-header";
import { PropsWithChildren } from "react";

export function CenteredLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="mx-auto w-full max-w-173 flex-1 px-6 py-12 md:py-16 md:pb-30">
        <main>{children}</main>
      </div>
    </div>
  );
}
