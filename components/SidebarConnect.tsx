import React from "react";
import { ExternalSidebarItem } from "./ExternalSidebarItem";

export function SidebarConnect() {
  return (
    <div>
      <p className="mb-[10px] pl-4 text-xs font-medium">Connect</p>
      <section className="flex flex-col gap-1 px-2">
        <ExternalSidebarItem href="mailto:jchpetty@gmail.com" content="Email" />
        <ExternalSidebarItem
          href="https://www.instagram.com/juwanpetty/"
          content="Instagram"
        />
        <ExternalSidebarItem
          href="https://twitter.com/juwanpetty"
          content="Twitter"
        />
        <ExternalSidebarItem
          href="https://github.com/juwanpetty"
          content="GitHub"
        />
      </section>
    </div>
  );
}
