import { SidebarSection } from "@/shared/components/sidebar-section";
import { MAIN_SECONDARY_NAVIGATION } from "@/shared/constants";

export function Sidebar() {
  return (
    <nav className="sticky top-[calc(96px+1px)] hidden h-[calc(100vh-136px-1px)] md:flex md:shrink-0 md:flex-col">
      <div className="space-y-4">
        {MAIN_SECONDARY_NAVIGATION.map((section) => (
          <SidebarSection
            key={section.title}
            heading={section.title}
            links={section.links}
          />
        ))}
      </div>
    </nav>
  );
}
