"use client";

import { HomeIcon } from "@/icons/HomeIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { GitHubIcon } from "@/icons/GitHubIcon";
import { BlueskyIcon } from "@/icons/BlueskyIcon";
import { YouTubeIcon } from "@/icons/YouTubeIcon";
import { CircleUserIcon } from "@/icons/CircleUserIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { BlogIcon } from "@/icons/BlogIcon";
import { MonitorIcon } from "@/icons/MonitorIcon";
import { EnvelopeIcon } from "@/icons/EnvelopeIcon";
import { HashtagIcon } from "@/icons/HashtagIcon";
import { AppStackIcon } from "@/icons/AppStackIcon";
import { BookOpenIcon } from "@/icons/BookOpenIcon";
import { CodeIcon } from "@/icons/CodeIcon";
import { cn } from "@/utilities/merge-classnames";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon";

export function DisabledSidebarLink({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 rounded-lg p-2 text-neutral-300 md:py-1.5 [&>svg]:size-4">
      {children}
    </span>
  );
}

export function SidebarExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:py-1.5 dark:text-white/70 dark:hover:bg-neutral-800 dark:hover:text-white [&>svg]:size-4"
    >
      {children}
    </a>
  );
}

export function SidebarLink({
  href,
  children,
  exact,
}: {
  href: string;
  children: ReactNode;
  exact?: boolean;
}) {
  const pathName = usePathname();

  function isActivePathname(
    currentPath: string,
    href: string,
    exact = false
  ): boolean {
    if (!href) return false;

    if (exact) {
      return currentPath === href;
    }

    return currentPath === href || currentPath.startsWith(href);
  }

  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-2 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:py-1.5 dark:text-white/70 dark:hover:bg-neutral-800 dark:hover:text-white [&>svg]:size-4",
        {
          "bg-blue-50 text-blue-500 hover:bg-blue-50 hover:text-blue-500":
            isActivePathname(pathName, href, exact),
        }
      )}
    >
      {children}
    </Link>
  );
}

export function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="not-first-of-type:mt-6">
      <span className="mb-2 inline-flex items-center gap-2 px-2 font-medium">
        {title}
      </span>
      <div>{children}</div>
    </section>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-14 left-0 h-[calc(100dvh-3.5rem)] w-2xs overflow-y-auto text-sm group-data-sidebar-collapsed:hidden max-md:hidden">
      <nav className="p-4">
        <SidebarSection title="Explore">
          <SidebarLink href={url.home()} exact>
            <HomeIcon />
            <span>Index</span>
          </SidebarLink>
          <SidebarLink href={url.projectIndex()}>
            <BoltIcon />
            <span>Projects</span>
          </SidebarLink>
          <SidebarLink href={url.componentsIndex()}>
            <CodeIcon />
            <span>Components</span>
          </SidebarLink>
          <DisabledSidebarLink>
            <CircleUserIcon />
            <span>About</span>
          </DisabledSidebarLink>
        </SidebarSection>

        <SidebarSection title="Resources">
          <DisabledSidebarLink>
            <HashtagIcon />
            <span>Feed</span>
          </DisabledSidebarLink>
          <SidebarLink href={url.thoughtsIndex()}>
            <BlogIcon />
            <span>Thoughts</span>
          </SidebarLink>
          <DisabledSidebarLink>
            <AppStackIcon />
            <span>Stack</span>
          </DisabledSidebarLink>
          <DisabledSidebarLink>
            <BookOpenIcon />
            <span>Reading</span>
          </DisabledSidebarLink>
          <DisabledSidebarLink>
            <MonitorIcon />
            <span>Workspace</span>
          </DisabledSidebarLink>
        </SidebarSection>

        <SidebarSection title="Connect">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:py-1.5 dark:text-white/70 dark:hover:bg-neutral-800 dark:hover:text-white [&>svg]:size-4"
          >
            <EnvelopeIcon />
            <span>Contact</span>
          </button>
          <SidebarExternalLink href="https://github.com/juwanpetty">
            <GitHubIcon />
            <span className="grow">GitHub</span>
            <ExternalLinkIcon />
          </SidebarExternalLink>
          <SidebarExternalLink href="https://bsky.app/profile/juwanpetty.com">
            <BlueskyIcon />
            <span className="grow">Bluesky</span>
            <ExternalLinkIcon />
          </SidebarExternalLink>
          <SidebarExternalLink href="https://www.youtube.com/@JuwanPetty">
            <YouTubeIcon />
            <span className="grow">YouTube</span>
            <ExternalLinkIcon />
          </SidebarExternalLink>
        </SidebarSection>
      </nav>
    </aside>
  );
}
