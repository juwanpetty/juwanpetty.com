import React, { useState } from "react";
import { Icons } from "@/shared/Icons";
import { SidebarItem } from "@/components/SidebarItem";
import { SidebarSection } from "@/components/SidebarSection";

export function SidebarConnect() {
  const [emailLabel, setEmailLabel] = useState("Email");

  function handleEmailClick() {
    try {
      navigator.clipboard.writeText("jchpetty@gmail.com");
      setEmailLabel("Copied!");
      setTimeout(() => {
        setEmailLabel("Email");
      }, 1500);
      // eslint-disable-next-line no-empty
    } catch (err) {
      // This is a fallback for browsers that don't support the Clipboard API
      //  Add toast logic here
    }
  }

  return (
    <SidebarSection label="Connect">
      <SidebarItem
        isExternal
        label={emailLabel}
        leadingVisual="Copy"
        onClick={() => handleEmailClick()}
      />
      <SidebarItem
        isExternal
        href="https:www.instagram.com/juwanpetty/"
        label="Instagram"
        trailingAction={<Icons.External size={16} />}
        leadingVisual="Instagram"
      />
      <SidebarItem
        isExternal
        href="https:twitter.com/juwanpetty"
        label="Twitter"
        trailingAction={<Icons.External size={16} />}
        leadingVisual="Twitter"
      />
      <SidebarItem
        isExternal
        href="https:github.com/juwanpetty"
        label="GitHub"
        trailingAction={<Icons.External size={16} />}
        leadingVisual="GithubAlt"
      />
    </SidebarSection>
  );
}
