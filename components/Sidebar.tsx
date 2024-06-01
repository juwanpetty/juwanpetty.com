"use client";

import { useContext } from "react";
import { SidebarConnect } from "./SidebarConnect";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarContext } from "../context/SidebarProvider";
import { cn } from "../utilities/mergeClassNames";

export function Sidebar() {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    // <nav className="sticky top-10 hidden h-min w-72 md:flex md:shrink-0 md:flex-col md:gap-14">
    <nav
      className={cn(
        "hidden h-min w-72 overflow-x-hidden md:shrink-0 md:flex-col md:gap-14",
        { "md:flex": isSidebarOpen }
      )}
    >
      <SidebarNavigation />
      <SidebarConnect />
    </nav>
  );
}
