"use client";

import { HouseIcon } from "@/icons/HouseIcon";
import { MenuIcon } from "@/icons/MenuIcon";
import { PenWritingIcon } from "@/icons/PenWritingIcon";
import { WindowCodeIcon } from "@/icons/WindowCodeIcon";
import { XMarkIcon } from "@/icons/XMarkIcon";
import { url } from "@/lib/url";
import { cn } from "@/utilities/merge-classnames";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

interface NavigationLinkProps extends React.ComponentProps<typeof Link> {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
}

function NavigationLink({
  children,
  href,
  exact,
  ...props
}: NavigationLinkProps) {
  const pathName = usePathname();

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
      {...props}
    >
      {children}
    </Link>
  );
}

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex size-8 items-center justify-center rounded sm:hidden"
      >
        <MenuIcon className="size-4" />
        <span className="sr-only">Toggle mobile menu</span>
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 duration-150 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 p-4">
          <DialogPanel
            transition
            className={cn(
              "w-full rounded-2xl bg-white px-4 py-5 ring ring-neutral-950/10 sm:px-6 dark:bg-neutral-950 dark:ring-white/10",
              "duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
            )}
          >
            <div className="mb-4 flex items-center justify-between">
              <Link
                href={url.index()}
                className="rounded-full"
                onClick={() => setOpen(false)}
              >
                <div className="relative size-10 rounded-full border border-solid border-black/10 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex size-8 items-center justify-center rounded"
              >
                <XMarkIcon className="size-4 text-neutral-500" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flex flex-col">
              <NavigationLink
                exact
                href={url.index()}
                onClick={() => setOpen(false)}
              >
                <HouseIcon />
                <span>Index</span>
              </NavigationLink>
              <NavigationLink
                href={url.blogIndex()}
                onClick={() => setOpen(false)}
              >
                <PenWritingIcon />
                <span>Blog</span>
              </NavigationLink>
              <NavigationLink
                href={url.craftIndex()}
                onClick={() => setOpen(false)}
              >
                <WindowCodeIcon />
                <span>Crafts</span>
              </NavigationLink>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export function Navbar({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="sticky top-0 z-10 flex h-14 items-center justify-between gap-x-8 bg-white/90 px-4 backdrop-blur-sm sm:px-6 dark:bg-neutral-900/90"
      {...props}
    >
      {children}
      <SiteNavigation />
      <MobileNavigation />
    </div>
  );
}

function SiteNavigation() {
  return (
    <nav className="flex items-center">
      <div className="flex gap-x-6 text-sm/6 text-neutral-900 max-sm:hidden dark:text-white">
        <Link href={url.blogIndex()}>Blog</Link>
        <Link href={url.craftIndex()}>Crafts</Link>
      </div>
    </nav>
  );
}
