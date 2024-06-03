import React from "react";
import { DropdownSidebarItem } from "@/components/DropdownSidebarItem";
import { SidebarSection } from "@/components/SidebarSection";
import { SidebarItem } from "@/components/SidebarItem";

export function SidebarNavigation() {
  return (
    <SidebarSection>
      <SidebarItem href="/" content="Home" />
      <SidebarItem href="/reading" content="Reading" />
      <DropdownSidebarItem href="/projects" label="Projects">
        <SidebarItem
          isExternal
          href="https://github.com/juwanpetty/github-icons"
          content="GitHub Icons"
        />
      </DropdownSidebarItem>
    </SidebarSection>
  );
}
