import { HeaderNavItem, SidebarNavItem } from "@/types/nav";

export interface AppConfig {
  headerNavigation: HeaderNavItem[];
  sidebarNavigation: SidebarNavItem[];
}

export const appConfig: AppConfig = {
  headerNavigation: [
    {
      title: "Explore",
      href: "/",
    },
    {
      title: "Writing",
      href: "/writing",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  sidebarNavigation: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Installation",
          href: "/docs/getting-started/installation",
          items: [],
        },
        {
          title: "Configuration",
          href: "/docs/getting-started/configuration",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/getting-started/changelog",
          items: [],
        },
      ],
    },
  ],
};
