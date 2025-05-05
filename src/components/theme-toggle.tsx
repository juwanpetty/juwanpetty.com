"use client";

import { Icons } from "@/components/icons";
import { createElement, useState } from "react";

export function ThemeToggle() {
  const states = ["light", "dark", "system"] as const;
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prev) => (prev + 1) % states.length);
  }

  let icon: keyof typeof Icons;
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
      className="hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 p-1.5 sm:flex"
    >
      {createElement(Icons[icon], { className: "h-5 w-5 text-neutral-500" })}
    </button>
  );
}
