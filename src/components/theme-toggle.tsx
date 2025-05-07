"use client";

import { Icons, IconsMap } from "@/components/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const states = ["light", "dark", "system"] as const;

  const initialStateIndex = () => {
    if (theme === "system" || theme === "dark" || theme === "light") {
      return states.indexOf(theme);
    }

    return 0;
  };

  const [index, setIndex] = useState(initialStateIndex);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 p-1.5">
        <Icons icon="sun" className="h-5 w-5 text-neutral-500" />
      </span>
    );
  }

  function handleClick() {
    const nextIndex = (index + 1) % states.length;

    setIndex(nextIndex);
    setTheme(states[nextIndex]);
  }

  let icon: keyof typeof IconsMap;
  switch (states[index]) {
    case "light":
      icon = "sun";
      break;
    case "dark":
      icon = "moon";
      break;
    case "system":
      icon = "desktop";
      break;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 p-1.5"
    >
      <Icons icon={icon} className="h-5 w-5 text-neutral-500" />
    </button>
  );
}
