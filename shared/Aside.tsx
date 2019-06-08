"use client";

import React, { useContext } from "react";
import { ScrollToTop } from "../components/ScrollToTop";
import { AsideContext } from "../context/AsideProvider";
import { cn } from "../utilities/mergeClassNames";

type Props = {
  children?: React.ReactNode;
};

export function Aside({ children }: Props) {
  const { isAsideOpen } = useContext(AsideContext);

  return (
    <aside
      className={cn(
        "sticky top-10 hidden h-min w-56 shrink-0 flex-col gap-10 pl-4",
        { "lg:flex": isAsideOpen }
      )}
    >
      {children}
      <ScrollToTop />
    </aside>
  );
}
