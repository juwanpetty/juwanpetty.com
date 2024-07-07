"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { cn } from "@/utilities/merge-classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "Projects", slug: "/projects" },
  { id: 3, name: "Writing", slug: "/writing" },
  { id: 4, name: "Reading", slug: "/reading" },
];

type NavigationProps = {
  pageTitle?: string;
};

export function Navigation({ pageTitle }: NavigationProps) {
  const pathName = usePathname();

  function getActiveItem(items: typeof navigationItems, path: string) {
    // Check for exact match with root path "/"
    const rootItem = items.find((item) => item.slug === "/");
    if (path === "/" && rootItem) {
      return rootItem;
    }

    // Split the path by "/" and filter out empty segments
    const segments = path.split("/").filter((segment) => segment !== "");

    // Find the matching item with the longest matching path
    const matchingItem = items.find((item) =>
      // Check if any segment matches the slug (excluding the leading "/")
      segments.some((segment) => segment === item.slug.slice(1))
    );

    return matchingItem || items[0];
  }

  const [activeItem, setActiveItem] = useState(
    getActiveItem(navigationItems, pathName)
  );

  return (
    <div className="flex h-[var(--header-height)] w-full min-w-0 items-center gap-1 text-sm font-medium">
      <Listbox value={activeItem} onChange={setActiveItem}>
        <ListboxButton className="block h-6 content-center text-nowrap rounded-lg bg-sand-3 px-2 text-sand-11 transition-colors hover:text-sand-12">
          {activeItem.name}
        </ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          className="flex flex-col gap-2 [--anchor-gap:8px]"
        >
          {navigationItems.map((item) => (
            <ListboxOption
              key={item.id}
              value={item}
              as={Link}
              href={item.slug}
              className={cn(
                "text-sm font-medium text-sand-11 data-[focus]:bg-sand-4",
                "block h-6 w-max cursor-pointer content-center rounded-lg bg-sand-3 px-2 text-sand-11 transition-colors hover:text-sand-12",
                { hidden: activeItem.id === item.id }
              )}
            >
              {item.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      {pageTitle ? (
        <>
          <span className="min-w-4 text-sand-6">
            <Icon icon="radix-icons:slash" className="size-4" />
          </span>
          <div className="h-6 min-w-0">
            <span
              className="block h-6 content-center truncate rounded-lg border border-sand-6 bg-sand-1 px-2 text-sand-12"
              aria-disabled
            >
              {pageTitle}
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}
