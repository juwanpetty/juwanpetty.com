import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ComponentProps } from "react";

export function SiteHeader() {
  return (
    <div className="border-border bg-background fixed inset-x-0 top-0 z-10 border-b">
      <div className="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div>
          {/* <Link href="/" className="flex size-8 items-center justify-center">
            <LogoIcon />
          </Link> */}
        </div>
        <div className="flex items-center gap-6 max-md:hidden">
          {/* <button className="flex h-8 items-center gap-1.5 rounded-sm px-1 text-sm text-neutral-700">
            <Icon name="search" className="size-3.5" />
            <div className="flex h-6 items-center gap-0.5 rounded-sm bg-neutral-100 px-1.5 text-neutral-700">
              <Icon name="command" className="size-3.5" />
              <span className="text-sm/5 font-[450]">K</span>
            </div>
          </button> */}
          <NavItem href="/">Crafts</NavItem>
          <NavItem href="/">Components</NavItem>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/juwanpetty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" className="text-secondary-foreground" />
              <span className="sr-only">Navigate to GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className="text-secondary-foreground text-sm/6"
      {...props}
    >
      {children}
    </Link>
  );
}
