"use client";

import { Icons } from "@/components/icons";
import { Fragment } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-aria-components";
import { THEME_STATES, THEME_ICONS } from "@/types/theme";
import { useThemeToggle } from "@/hooks/use-theme-toggle";
import { cn } from "@/utilities/merge-classnames";

export function ThemeToggle() {
  const { mounted, selectedIndex, currentTheme, handleThemeChange } =
    useThemeToggle();

  if (!mounted) {
    return (
      <span className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100">
        <Icons icon="sun" className="size-4 text-neutral-900" />
      </span>
    );
  }

  const handleClick = () => {
    const nextIndex = (selectedIndex + 1) % THEME_STATES.length;
    handleThemeChange(nextIndex);
  };

  return (
    <Fragment>
      {/* <button
        type="button"
        onClick={handleClick}
        className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-neutral-100 md:hidden"
      >
        <Icons
          icon={THEME_ICONS[currentTheme]}
          className="size-4 text-neutral-900"
        />
      </button> */}
      <ToggleButtonGroup className="flex h-8 items-center gap-0.5 rounded-[10px] border border-neutral-100 bg-neutral-50 p-0.5 px-px">
        {THEME_STATES.map((state) => (
          <ToggleButton
            key={state}
            isSelected={currentTheme === state}
            onChange={() => handleThemeChange(THEME_STATES.indexOf(state))}
            className={cn(
              "flex h-7 flex-1 cursor-pointer items-center rounded-[8px] border border-transparent px-4 py-1.5 text-sm font-medium text-neutral-500 capitalize transition-colors ease-[ease] data-[selected]:border-neutral-200 data-[selected]:bg-white data-[selected]:text-neutral-900",
              {
                "hover:bg-neutral-100": currentTheme !== state,
                "hover:bg-white": currentTheme === state,
              }
            )}
          >
            {state}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Fragment>
  );
}
