"use client";

import { cn } from "@/shared/utilities/merge-classnames";
import { ReactNode } from "react";
import { Drawer } from "vaul";

type Props = {
  activator: ReactNode;
  accessibilityLabel: string;
  accessibilityDescription: string;
  direction?: "left" | "right";
  children: ReactNode;
};

export function SidePanel({
  activator,
  accessibilityLabel,
  accessibilityDescription,
  direction = "left",
  children,
}: Props) {
  return (
    <Drawer.Root direction={direction}>
      <Drawer.Trigger asChild>{activator}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-20 bg-black/40" />
        <Drawer.Content
          className={cn(
            "fixed bottom-2 top-2 z-30 flex w-[250px] outline-none md:w-[310px]",
            direction === "left" ? "left-2" : "right-2",
          )}
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="h-full w-full rounded-[16px] bg-zinc-50 p-5">
            <div className="mx-auto max-w-md">
              <Drawer.Title className="sr-only">
                {accessibilityLabel}
              </Drawer.Title>
              <Drawer.Description className="sr-only">
                {accessibilityDescription}
              </Drawer.Description>
              {children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
