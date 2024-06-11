"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Icons } from "@/shared/Icons";
import { SidebarItem } from "@/components/SidebarItem";
import { StopClickEventPropagation } from "@/components/StopClickEventPropagation";

type Props = {
  label: string;
  href: string;
  children: React.ReactNode;
  leadingVisual?: keyof typeof Icons;
  onClick?: () => void;
};

export function DropdownSidebarItem({
  label,
  href,
  children,
  leadingVisual,
  onClick,
}: Props) {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item className="overflow-hidden" value="item-1">
        <Accordion.Header className="mb-1 w-full items-center justify-between">
          <SidebarItem
            href={href}
            onClick={onClick}
            label={label}
            leadingVisual={leadingVisual}
            trailingAction={
              <StopClickEventPropagation shouldPreventDefault>
                <Accordion.Trigger asChild>
                  <button
                    type="button"
                    className="flex rotate-0 items-center justify-center transition-transform duration-200 data-[state=open]:rotate-90"
                  >
                    <Icons.ChevronRight size={16} />
                    <span className="sr-only">Toggle dropdown</span>
                  </button>
                </Accordion.Trigger>
              </StopClickEventPropagation>
            }
          />
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
