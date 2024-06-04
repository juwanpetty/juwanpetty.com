import React from "react";
import { SidebarItem } from "@/components/SidebarItem";
import { SidebarSection } from "@/components/SidebarSection";

export function SidebarConnect() {
  return (
    <SidebarSection label="Connect">
      <SidebarItem
        isExternal
        href="mailto:jchpetty@gmail.com"
        content="Email"
      />
      <SidebarItem
        isExternal
        href="https:www.instagram.com/juwanpetty/"
        content="Instagram"
      />
      <SidebarItem
        isExternal
        href="https:twitter.com/juwanpetty"
        content="Twitter"
      />
      <SidebarItem
        isExternal
        href="https:github.com/juwanpetty"
        content="GitHub"
      />
    </SidebarSection>
  );
}
