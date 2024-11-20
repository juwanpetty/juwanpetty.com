import { ReactNode } from "react";
import { SidebarSection } from "@/shared/components/sidebar-section";
import { Navigation } from "@/shared/components/navigation";
import { MAIN_SECONDARY_NAVIGATION } from "@/shared/constants";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mx-auto w-full">
      <Navigation />
      <div className="mx-auto">
        <div className="grid w-full items-start px-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem-1px)] w-full shrink-0 md:sticky md:block">
            <div className="no-scrollbar h-full overflow-auto py-6 pr-6 lg:py-8">
              <div className="space-y-4">
                {MAIN_SECONDARY_NAVIGATION.map((section) => (
                  <SidebarSection
                    key={section.title}
                    heading={section.title}
                    links={section.links}
                  />
                ))}
              </div>
            </div>
          </aside>
          {children}
        </div>
      </div>
    </div>
  );
}
