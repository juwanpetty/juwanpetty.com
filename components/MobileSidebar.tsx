"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Icons } from "@/shared/Icons";
import { SidebarConnect } from "@/components/SidebarConnect";
import { SidebarSection } from "@/components/SidebarSection";
import { SidebarItem } from "@/components/SidebarItem";
import { DropdownSidebarItem } from "@/components/DropdownSidebarItem";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }

  const openButtonMarkup = (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="inline-block text-stone-400 md:hidden"
    >
      <Icons.Menu size={20} />
      <span className="sr-only">Menu</span>
    </button>
  );

  const closeButtonMarkup = (
    <button
      type="button"
      onClick={() => closeSidebar()}
      className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-stone-100"
    >
      <Icons.Close className="size-4" />
      <span className="sr-only">Close</span>
    </button>
  );

  return (
    <>
      {openButtonMarkup}
      <Dialog
        open={isOpen}
        onClose={() => closeSidebar()}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="relative h-[95dvh] w-[95vw] rounded-lg border bg-white p-4 pt-16">
            {closeButtonMarkup}
            <span className="sr-only">Close</span>
            <div className="flex flex-col gap-14">
              <SidebarSection>
                <SidebarItem
                  href="/"
                  label="Home"
                  leadingVisual="Home"
                  onClick={() => closeSidebar()}
                />
                <SidebarItem
                  href="/reading"
                  label="Reading"
                  leadingVisual="Book"
                  onClick={() => closeSidebar()}
                />
                <DropdownSidebarItem
                  href="/projects"
                  label="Projects"
                  leadingVisual="Code"
                  onClick={() => closeSidebar()}
                >
                  <SidebarItem
                    isExternal
                    href="https://github.com/juwanpetty/github-icons"
                    label="GitHub Icons"
                    trailingAction={<Icons.External size={16} />}
                  />
                </DropdownSidebarItem>
              </SidebarSection>

              <SidebarConnect />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
