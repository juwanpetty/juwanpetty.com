"use client";

import { MenuIcon } from "@/icons/MenuIcon";
import { XMarkIcon } from "@/icons/XMarkIcon";
import { url } from "@/lib/url";
import { cn } from "@/utilities/merge-classnames";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Link } from "next-view-transitions";
import { useState } from "react";

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
              "w-full rounded-md bg-white px-4 py-5 ring ring-neutral-950/10 sm:px-6 dark:bg-neutral-950 dark:ring-white/10",
              "duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"
            )}
          >
            <div className="flex items-center justify-end">
              <button type="button" onClick={() => setOpen(false)}>
                <XMarkIcon className="size-4" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="flex flex-col">
              <Link href={url.blogIndex()} onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link href={url.craftIndex()} onClick={() => setOpen(false)}>
                Crafts
              </Link>
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
