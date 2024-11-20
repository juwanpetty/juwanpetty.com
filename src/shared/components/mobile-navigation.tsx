import { SidePanel } from "@/shared/components/side-panel";
import { SidebarSection } from "@/shared/components/sidebar-section";
import { MAIN_SECONDARY_NAVIGATION } from "@/shared/constants";

export function MobileNavigation() {
  const mobilePanelActivator = (
    <button
      type="button"
      className="flex size-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="size-4"
      >
        <g fill="currentColor">
          <path d="M16.25,6.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h14.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" />
          <path d="M16.25,13H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h14.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z" />
        </g>
      </svg>
      <span className="sr-only">Open menu</span>
    </button>
  );

  return (
    <SidePanel
      activator={mobilePanelActivator}
      accessibilityLabel="main"
      accessibilityDescription="description"
    >
      <div className="space-y-4">
        {MAIN_SECONDARY_NAVIGATION.map((section) => (
          <SidebarSection
            key={section.title}
            heading={section.title}
            links={section.links}
          />
        ))}
      </div>
    </SidePanel>
  );
}
