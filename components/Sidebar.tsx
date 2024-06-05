"use client";

import { SidebarConnect } from "@/components/SidebarConnect";
import { SidebarNavigation } from "@/components/SidebarNavigation";

export function Sidebar() {
  return (
    <nav className="fixed left-0 top-[var(--header-height)] z-10 hidden h-[calc(100vh-var(--header-height))] w-72 overflow-y-auto p-6 pb-16 md:flex md:shrink-0 md:flex-col md:gap-14">
      <SidebarNavigation />
      <SidebarConnect />
    </nav>
  );
}
