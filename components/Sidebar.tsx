"use client";

import { useContext } from "react";
import { SidebarConnect } from "@/components/SidebarConnect";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { SidebarContext } from "@/context/SidebarProvider";
import { cn } from "@/utilities/mergeClassNames";

export function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <nav
      className={cn(
        "hidden h-min w-56 overflow-x-hidden md:shrink-0 md:flex-col md:gap-14",
        { "md:flex": isSidebarOpen }
      )}
    >
      <SidebarNavigation />
      <SidebarConnect />
    </nav>
  );
}
