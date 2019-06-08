"use client";

import React, { useEffect, useState } from "react";

import { Icons } from "../shared/Icons";
import { cn } from "../utilities/mergeClassNames";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pageWrapper = document.getElementById("page-wrapper");
    if (!pageWrapper) return; // Early return if element is not found

    const handleScroll = () => {
      if (pageWrapper.scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    pageWrapper.addEventListener("scroll", handleScroll);

    // eslint-disable-next-line consistent-return
    return () => {
      pageWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function onClick() {
    const pageWrapper = document.getElementById("page-wrapper");
    if (!pageWrapper) return; // Early return if element is not found

    pageWrapper.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "pointer-events-none flex items-center gap-2 text-stone-300 opacity-0 transition-opacity",
        {
          "pointer-events-auto opacity-100": isVisible,
        }
      )}
    >
      <span className="text-sm text-stone-500">Scroll to top</span>
      <Icons.CircleArrowUp size={16} />
    </button>
  );
}
