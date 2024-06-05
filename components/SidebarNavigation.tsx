import React from "react";
import { Icons } from "@/shared/Icons";
import { DropdownSidebarItem } from "@/components/DropdownSidebarItem";
import { SidebarSection } from "@/components/SidebarSection";
import { SidebarItem } from "@/components/SidebarItem";

export function SidebarNavigation() {
  return (
    <SidebarSection>
      <SidebarItem href="/" label="Home" leadingVisual="Home" />
      <SidebarItem href="/reading" label="Reading" leadingVisual="Book" />
      <DropdownSidebarItem
        href="/projects"
        label="Projects"
        leadingVisual="Code"
      >
        <SidebarItem
          isExternal
          href="https://github.com/juwanpetty/github-icons"
          label="GitHub Icons"
          trailingAction={<Icons.External size={16} />}
        />
      </DropdownSidebarItem>
    </SidebarSection>
  );
}
