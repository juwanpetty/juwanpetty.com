"use client";

import React from "react";

import { usePathname } from "next/navigation";
import * as Accordion from "@radix-ui/react-accordion";
import { Icons } from "@/shared/Icons";
import { SidebarItem } from "@/components/SidebarItem";
import { cn } from "@/utilities/mergeClassNames";
import { isCurrentPath } from "@/utilities/isCurrentPath";

type Props = {
  label: string;
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export function DropdownSidebarItem({ label, href, onClick, children }: Props) {
  const pathName = usePathname();

  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item className="overflow-hidden" value="item-1">
        <Accordion.Header className="mb-1 flex items-center justify-between">
          <SidebarItem href={href} content={label} onClick={onClick} />
          <Accordion.Trigger
            className={cn(
              "mr-2 rotate-0 text-stone-300 transition-transform duration-200 data-[state=open]:rotate-90",
              {
                "font-medium text-stone-600": isCurrentPath(pathName, href),
              }
            )}
          >
            <Icons.ChevronRight size={16} />
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="overflow-hidden pl-3 data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
          <div className="relative pl-1 before:absolute before:left-0 before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
            {children}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
