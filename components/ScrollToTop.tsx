"use client";

import { Icon } from "@iconify/react";

export function ScrollToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex h-6 items-center gap-1 rounded-lg px-2 text-sand-11 transition-colors hover:text-sand-12"
    >
      <Icon icon="radix-icons:arrow-up" className="size-4" />
      <span className="text-sm font-medium">Back to Top</span>
    </button>
  );
}
