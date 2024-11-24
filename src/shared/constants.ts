import { SecondaryNavigation } from "@/shared/types";

export const MAIN_SECONDARY_NAVIGATION: SecondaryNavigation[] = [
  {
    title: "Explore",
    links: [
      { name: "Writing", href: "/blog" },
      { name: "Projects", href: "/projects" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Changelog", href: "/changelog" },
      { name: "Dashboard", href: "/dashboard" },
      { name: "Colophon", href: "/colophon" },
      { name: "Now", href: "/now" },
    ],
  },
];