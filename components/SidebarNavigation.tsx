import React from "react";
import { DropdownSidebarItem } from "@/components/DropdownSidebarItem";
import { ExternalSidebarItem } from "@/components/ExternalSidebarItem";
import { SidebarItem } from "@/components/SidebarItem";

export function SidebarNavigation() {
  return (
    <div>
      <section className="flex flex-col gap-1 px-2">
        <SidebarItem href="/" content="Home" />
        <SidebarItem href="/reading" content="Reading" />
        <DropdownSidebarItem href="/projects" label="Projects">
          <ExternalSidebarItem
            href="https://github.com/juwanpetty/github-icons"
            content="GitHub Icons"
          />
        </DropdownSidebarItem>
      </section>
    </div>
  );
}
