"use client";

import { useContext } from "react";
import { Icons } from "@/shared/Icons";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { AsideContext } from "@/context/AsideProvider";
import { SidebarContext } from "@/context/SidebarProvider";

export function Header() {
  const { toggleSidebarOpen } = useContext(SidebarContext);
  const { toggleAsideOpen } = useContext(AsideContext);

  const buttonMarkup = (
    <button
      type="button"
      className="text-stone-400"
      onClick={() => toggleSidebarOpen()}
    >
      <Icons.Menu size={20} />
      <span className="sr-only">Menu</span>
    </button>
  );

  return (
    <div className="hidden h-12 items-center justify-between px-8 md:flex">
      {buttonMarkup}

      <div className="flex w-56 items-center justify-end gap-4">
        <div className="flex items-center gap-4">
          {/* <button type="button" className="text-stone-400">
            <Icons.Placeholder size={20} />
            <span className="sr-only">Toggle appearence</span>
          </button> */}
          {/* <ThemeSwitcher /> */}
        </div>
        <ThemeSwitcher />
        <button
          type="button"
          className="hidden text-stone-400 lg:flex"
          onClick={() => toggleAsideOpen()}
        >
          <Icons.MenuRight size={20} />
          <span className="sr-only">Aside</span>
        </button>
      </div>
    </div>
  );
}
