"use client";

import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderThemeIcon() {
    switch (theme) {
      case "light":
        return <Icon icon="tabler:sun" className="size-4" />;
      case "dark":
        return <Icon icon="tabler:moon" className="size-4" />;
      default:
        return <Icon icon="tabler:sun" className="size-4" />;
    }
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  if (!mounted) return null;

  return (
    <button
      type="button"
      className="text-stone-400"
      onClick={() => toggleTheme()}
    >
      {renderThemeIcon()}
      <span className="sr-only">Toggle site theme</span>
    </button>
  );
}
