"use client";

import { Icons, IconsMap } from "@/components/icons";
import { useTheme } from "next-themes";
import { Fragment, useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-aria-components";

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
      <span className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100">
        <Icons icon="sun" className="size-4 text-neutral-900" />
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
    <Fragment>
      <button
        type="button"
        onClick={handleClick}
        className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 md:hidden"
      >
        <Icons icon={icon} className="size-4 text-neutral-900" />
      </button>
      <ToggleButtonGroup className="flex h-8 items-center gap-0.5 rounded-[10px] border border-neutral-100 bg-neutral-50 p-0.5 px-px">
        {states.map((state) => (
          <ToggleButton
            key={state}
            isSelected={states[index] === state}
            onChange={() => {
              const newIndex = states.indexOf(state);
              setIndex(newIndex);
              setTheme(state);
            }}
            className="flex h-7 flex-1 cursor-pointer items-center rounded-[8px] border border-transparent px-3 px-4 py-1.5 text-sm font-medium text-neutral-500 capitalize data-[selected]:border-neutral-200 data-[selected]:bg-white data-[selected]:text-neutral-900"
          >
            {state}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Fragment>
  );
}
