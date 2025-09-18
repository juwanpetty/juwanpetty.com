"use client";

import { SiteHeader } from "@/components/site-header";
import { PropsWithChildren } from "react";

function Sidebar() {
  return (
    <aside className="hidden border-r border-neutral-200 md:block">
      <nav className="flex flex-col gap-6 p-4">
        <span>Sidebar</span>
      </nav>
    </aside>
  );
}

export function SidebarLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <div className="mx-auto grid w-full max-w-screen-2xl flex-1 grid-cols-1 md:grid-cols-[16rem_1fr]">
        <Sidebar />
        <main className="min-w-0 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
