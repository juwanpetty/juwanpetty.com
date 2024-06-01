"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Icons } from "../shared/Icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function renderThemeIcon() {
    switch (theme) {
      case "light":
        return <Icons.Sun size={20} />;
      case "dark":
        return <Icons.Moon size={20} />;
      default:
        return <Icons.Sun size={20} />;
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
