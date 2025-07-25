import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/sidebar";
import { GlobeIcon } from "@/icons/GlobeIcon";
import { LogoIcon } from "@/icons/LogoIcon";
import { ChevronExpandYIcon } from "@/icons/ChevronExpandYIcon";
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon";
import { CopyIcon } from "@/icons/CopyIcon";
import { BlueskyIcon } from "@/icons/BlueskyIcon";
import { GitHubIcon } from "@/icons/GitHubIcon";
import { YouTubeIcon } from "@/icons/YouTubeIcon";
import { Link } from "next-view-transitions";
import { AppStackIcon } from "@/icons/AppStackIcon";
import { CircleUserIcon } from "@/icons/CircleUserIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { HomeIcon } from "@/icons/HomeIcon";
import { WindowCodeIcon } from "@/icons/WindowCodeIcon";
import { BlogIcon } from "@/icons/BlogIcon";
import { HashtagIcon } from "@/icons/HashtagIcon";
import { BookOpenIcon } from "@/icons/BookOpenIcon";
import { MonitorIcon } from "@/icons/MonitorIcon";
import { CodeIcon } from "@/icons/CodeIcon";

function DropdownMenu() {
  return (
    <Menu>
      <MenuButton className="flex h-8 items-center gap-2 rounded-lg p-1 transition-colors hover:bg-black/4">
        <LogoIcon className="size-6 text-neutral-950" />
        <span className="text-sm font-medium text-neutral-950">
          Juwan Petty
        </span>
        <div className="flex size-5 items-center justify-center">
          <ChevronExpandYIcon className="size-4 text-neutral-600" />
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="w-64 rounded-lg border border-black/10 bg-white shadow-sm [--anchor-gap:0.25rem] [--anchor-offset:-0.25rem]"
      >
        <MenuSection className="p-1">
          <MenuItem
            as="button"
            className="flex h-8 w-full items-center gap-1 rounded p-1.5 text-left transition-colors hover:bg-black/4 data-focus:bg-black/4"
          >
            <CopyIcon className="mx-0.5 size-4 text-neutral-600" />
            <span className="grow px-1 text-sm">Email</span>
          </MenuItem>
        </MenuSection>
        <MenuSeparator className="my-px h-px bg-black/10" />
        <MenuSection className="p-1">
          <MenuItem
            as="a"
            className="flex h-8 items-center gap-1 rounded p-1.5 transition-colors hover:bg-black/4 data-focus:bg-black/4"
            href="/settings"
          >
            <GitHubIcon className="mx-0.5 size-4 text-neutral-600" />
            <span className="grow px-1 text-sm">GitHub</span>
            <ExternalLinkIcon className="mx-0.5 size-4 text-neutral-600" />
          </MenuItem>
          <MenuItem
            as="a"
            className="flex h-8 items-center gap-1 rounded p-1.5 transition-colors hover:bg-black/4 data-focus:bg-black/4"
            href="/support"
          >
            <BlueskyIcon className="mx-0.5 size-4 text-neutral-600" />
            <span className="grow px-1 text-sm">Bluesky</span>
            <ExternalLinkIcon className="mx-0.5 size-4 text-neutral-600" />
          </MenuItem>
          <MenuItem
            as="a"
            className="flex h-8 items-center gap-1 rounded p-1.5 transition-colors hover:bg-black/4 data-focus:bg-black/4"
            href="/license"
          >
            <YouTubeIcon className="mx-0.5 size-4 text-neutral-600" />
            <span className="grow px-1 text-sm">YouTube</span>
            <ExternalLinkIcon className="mx-0.5 size-4 text-neutral-600" />
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <DropdownMenu />

        <button className="flex size-8 items-center justify-center rounded-md">
          <GlobeIcon className="size-4.5 text-neutral-500" />
          <span className="sr-only">Toggle sidebar</span>
        </button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuButton asChild>
              <Link href="/">
                <HomeIcon />
                <span>Index</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <Link href="/blog">
                <BlogIcon />
                <span>Blog</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <Link href="/projects">
                <BoltIcon />
                <span>Projects</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton disabled>
              <CircleUserIcon />
              <span>About</span>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuButton disabled>
              <HashtagIcon />
              <span>Feed</span>
            </SidebarMenuButton>
            <SidebarMenuButton disabled>
              <AppStackIcon />
              <span>Stack</span>
            </SidebarMenuButton>
            <SidebarMenuButton disabled>
              <BookOpenIcon />
              <span>Reading</span>
            </SidebarMenuButton>
            <SidebarMenuButton disabled>
              <MonitorIcon />
              <span>Workspace</span>
            </SidebarMenuButton>
            <SidebarMenuButton asChild>
              <Link href="/components">
                <WindowCodeIcon />
                <span>Components</span>
              </Link>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
