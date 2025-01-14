import { ReactNode } from "react";
import { SidebarSection } from "@/shared/components/sidebar-section";
import { Navigation } from "@/shared/components/navigation";
import { MAIN_SECONDARY_NAVIGATION, SITE_NAME } from "@/shared/constants";
import { Metadata } from "next";
import { Footer } from "@/shared/components/footer";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
};

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mx-auto w-full">
      <Navigation />
      <div className="relative mx-auto w-full max-w-screen-xl px-8 md:flex md:flex-row">
        <div className="grid w-full md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed top-14 z-0 hidden h-[calc(100vh-72px-1px-56px-1px)] w-full shrink-0 md:sticky md:block">
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
      <Footer />
    </div>
  );
}
