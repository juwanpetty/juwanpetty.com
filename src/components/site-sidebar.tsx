import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function SiteSidebar({ children }: Props) {
  return (
    <aside className="fixed top-14 z-10 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-neutral-100 md:sticky md:block">
      <div className="no-scrollbar h-full overflow-auto px-8 py-6 pr-4 lg:py-8">
        {children}
      </div>
    </aside>
  );
}
