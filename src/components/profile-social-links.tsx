import { Icons } from "@/components/icons";
import { SocialLinks } from "@/components/social-links";
import { SOCIAL_LINKS } from "@/constants";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Fragment } from "react";

export function ProfileSocialLinks() {
  return (
    <Fragment>
      <div className="hidden sm:flex">
        <SocialLinks />
      </div>
      <Popover className="relative sm:hidden">
        <PopoverButton className="flex size-8 items-center justify-center rounded-lg">
          <Icons icon="dots" className="size-4 text-neutral-500" />
          <span className="sr-only">Open social links</span>
        </PopoverButton>

        <PopoverPanel
          anchor="bottom"
          className="flex w-45 flex-col gap-1 rounded-xl border border-neutral-900/10 bg-white px-1.5 py-1 shadow-xs [--anchor-gap:8px]"
        >
          {SOCIAL_LINKS.map(({ href, icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 items-center gap-2 rounded-md px-1.5"
            >
              <Icons icon={icon} className="size-4 text-neutral-500" />
              <span className="grow text-sm">{label}</span>
              <Icons icon="arrowUpRight" className="size-4 text-neutral-500" />
            </a>
          ))}
        </PopoverPanel>
      </Popover>
    </Fragment>
  );
}
