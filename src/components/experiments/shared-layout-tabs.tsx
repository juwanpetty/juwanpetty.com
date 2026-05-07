"use client";

import { ComponentProps, ComponentType, useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconCirclePlayFill18,
  IconCircleUserFill18,
  IconPage2Fill18,
  IconProps,
  IconSquareTerminalFill18,
  IconTabsFill18,
} from "nucleo-ui-fill-18";
import { motion } from "motion/react";

type Tab = {
  id: string;
  label: string;
  icon: ComponentType<IconProps>;
};

const TABS: Tab[] = [
  { id: "1", label: "All Feed", icon: IconTabsFill18 },
  { id: "2", label: "Articles", icon: IconPage2Fill18 },
  { id: "3", label: "Code", icon: IconSquareTerminalFill18 },
  { id: "4", label: "Videos", icon: IconCirclePlayFill18 },
  { id: "5", label: "Talks", icon: IconCircleUserFill18 },
];

type TabButtonProps = {
  label: string;
  icon: ComponentType<IconProps>;
};

function TabButton({
  label,
  icon: Icon,
  className,
  ...props
}: ComponentProps<"button"> & TabButtonProps) {
  return (
    <button
      className={cn(
        "text-gray-12 relative z-10 flex h-8 items-center gap-2 rounded-2xl px-3 py-3 transition-colors",
        className
      )}
      {...props}
    >
      <Icon className="size-4" />
      <span className="px-1 text-sm font-medium whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}

export function SharedLayoutTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  function handleTabClick(id: string) {
    setActiveTab(id);
  }

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center">
      <div className="relative z-0 flex items-center gap-2">
        {TABS.map(({ id, label, icon }, index) => {
          const isActive = id === activeTab;

          return (
            <div
              key={id}
              className={cn("relative", index >= 3 && "hidden sm:block")}
            >
              <TabButton
                icon={icon}
                label={label}
                onClick={() => handleTabClick(id)}
                className={cn(isActive ? "text-gray-1" : "text-gray-12")}
              />

              {isActive ? (
                <motion.div
                  layoutId="button-background"
                  className="bg-gray-12 absolute inset-0 z-0 h-8 w-full rounded-full"
                  transition={{
                    type: "tween",
                    duration: 0.15,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
