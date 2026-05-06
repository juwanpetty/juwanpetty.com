"use client";

import {
  ComponentProps,
  ComponentType,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import {
  IconCirclePlayFill18,
  IconCircleUserFill18,
  IconPage2Fill18,
  IconProps,
  IconSquareTerminalFill18,
  IconTabsFill18,
} from "nucleo-ui-fill-18";

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

export function ClipPathTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeTabElementRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeftPercent = Number(
          (offsetLeft / container.offsetWidth) * 100
        ).toFixed(2);
        const clipRightPercent = Number(
          100 - ((offsetLeft + offsetWidth) / container.offsetWidth) * 100
        ).toFixed(2);

        container.style.clipPath = `inset(0 ${clipRightPercent}% 0 ${clipLeftPercent}% round 32px)`;
      }
    }
  }, [activeTab, activeTabElementRef, containerRef]);

  function handleTabClick(id: string) {
    setActiveTab(id);
  }

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center">
      <div className="relative">
        <div className="relative z-0 flex items-center gap-2">
          {TABS.map(({ id, label, icon }, index) => (
            <div key={id} className={cn(index >= 3 && "hidden sm:block")}>
              <TabButton
                icon={icon}
                label={label}
                onClick={() => handleTabClick(id)}
                ref={activeTab === id ? activeTabElementRef : null}
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden
          ref={containerRef}
          className={cn(
            "bg-gray-12 absolute top-0 left-0 z-10 flex w-full items-center gap-2 overflow-hidden",
            "transition-[clip-path] duration-250 ease-in-out",
            "[clip-path:inset(0px_79.5%_0px_0%_round_32px)]"
          )}
        >
          {TABS.map(({ id, label, icon }, index) => (
            <div key={id} className={cn(index >= 3 && "hidden sm:block")}>
              <TabButton
                icon={icon}
                label={label}
                onClick={() => handleTabClick(id)}
                className="text-gray-1 bg-transparent"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
        "text-gray-12 flex h-8 items-center gap-2 rounded-2xl px-3 py-3",
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
