"use client";

import { Icons } from "@/shared/Icons";

export function SiteControls() {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-14 w-full items-center justify-start border-b border-solid border-neutral-200 bg-white px-4 md:px-8">
      <button type="button" className="inline-block text-stone-400 md:hidden">
        <Icons.Menu size={20} />
        <span className="sr-only">Menu</span>
      </button>
    </div>
  );
}
