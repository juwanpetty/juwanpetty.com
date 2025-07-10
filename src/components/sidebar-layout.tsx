"use client";

import { Navbar } from "@/components/navbar";
import {
  DisabledSidebarLink,
  Sidebar,
  SidebarExternalLink,
  SidebarLink,
  SidebarSection,
} from "@/components/sidebar";
import { ReactNode, useState } from "react";
import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import { LayoutLeftIcon } from "@/icons/LayoutLeftIcon";
import { AppStackIcon } from "@/icons/AppStackIcon";
import { BlogIcon } from "@/icons/BlogIcon";
import { BlueskyIcon } from "@/icons/BlueskyIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { BookOpenIcon } from "@/icons/BookOpenIcon";
import { CircleUserIcon } from "@/icons/CircleUserIcon";
import { CodeIcon } from "@/icons/CodeIcon";
import { EnvelopeIcon } from "@/icons/EnvelopeIcon";
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon";
import { GitHubIcon } from "@/icons/GitHubIcon";
import { HashtagIcon } from "@/icons/HashtagIcon";
import { HomeIcon } from "@/icons/HomeIcon";
import { MonitorIcon } from "@/icons/MonitorIcon";
import { YouTubeIcon } from "@/icons/YouTubeIcon";
import { url } from "@/lib/url";

function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogBackdrop className="fixed inset-0 bg-gray-950/25" />
      <DialogPanel className="fixed inset-y-0 left-0 isolate w-sm max-w-[calc(100%-(--spacing(11)))] overflow-y-auto bg-white ring ring-gray-950/10 sm:w-xs dark:bg-gray-950 dark:ring-white/10">
        <div className="sticky top-0 z-10 px-4 py-3">
          <div className="flex h-6 shrink-0">
            <CloseButton className="flex size-8 items-center justify-center">
              <LayoutLeftIcon className="size-4.5" />
              <span className="sr-only">Toggle sidebar</span>
            </CloseButton>
          </div>

          <div>
            <nav className="py-6">
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
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export function SidebarLayout({ children }: { children: ReactNode }) {
  const [isMobileDialogOpen, setIsMobileDialogOpen] = useState(false);

  return (
    <div className="group">
      <Navbar
        setIsMobileDialogOpen={setIsMobileDialogOpen}
        isMobileDialogOpen={isMobileDialogOpen}
      />
      <MobileNavigation
        open={isMobileDialogOpen}
        onClose={() => setIsMobileDialogOpen(false)}
      />
      <div className="mt-14 grid w-full min-w-0 grid-cols-[auto_1fr]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}

export function SidebarLayoutContent({ children }: { children: ReactNode }) {
  return (
    <div className="col-span-full flex justify-center md:col-auto">
      {children}
    </div>
  );
}
