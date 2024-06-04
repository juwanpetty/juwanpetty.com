"use client";

import { ScrollToTop } from "@/components/ScrollToTop";

type Props = {
  children?: React.ReactNode;
};

export function Aside({ children }: Props) {
  return (
    <aside className="sticky top-10 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 flex-col gap-10 overflow-y-auto p-6 pb-16 pl-4 lg:flex">
      {children}
      <ScrollToTop />
    </aside>
  );
}
