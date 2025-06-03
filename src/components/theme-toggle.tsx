"use client";

import { ToggleButtonGroup, ToggleButton } from "react-aria-components";
import { THEME_STATES } from "@/types/theme";
import { useThemeToggle } from "@/hooks/use-theme-toggle";
import { cn } from "@/utilities/merge-classnames";

export function ThemeToggle() {
  const { mounted, currentTheme, handleThemeChange } = useThemeToggle();

  if (!mounted) {
    return null;
  }

  return (
    <ToggleButtonGroup className="border-neutral-9/10 bg-neutral-1 flex h-8 items-center gap-0.5 rounded-[10px] border p-0.5 px-px">
      {THEME_STATES.map((state) => (
        <ToggleButton
          key={state}
          isSelected={currentTheme === state}
          onChange={() => handleThemeChange(THEME_STATES.indexOf(state))}
          className={cn(
            "text-neutral-11 data-[selected]:border-neutral-12/10 data-[selected]:text-neutral-12 flex h-7 flex-1 cursor-pointer items-center rounded-[8px] border border-transparent px-4 py-1.5 text-sm font-medium capitalize transition-colors ease-[ease] data-[selected]:bg-white",
            {
              "hover:bg-neutral-2": currentTheme !== state,
              "hover:bg-white": currentTheme === state,
            }
          )}
        >
          {state}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
