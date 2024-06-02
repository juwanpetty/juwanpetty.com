"use client";

import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Icons } from "@/shared/Icons";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { SidebarConnect } from "@/components/SidebarConnect";
import { useWindowWidth } from "@/hooks/useWindowWidth";

const TAILWIND_SM = 768;

function DialogOverlay() {
  return <div className="fixed inset-0 bg-black/30" aria-hidden="true" />;
}

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useWindowWidth({
    callback: () => setIsOpen(false),
    minimumBoundary: TAILWIND_SM,
  });

  return (
    <>
      <button
        type="button"
        className="inline-block text-stone-400 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Icons.Menu size={20} />
        <span className="sr-only">Menu</span>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogOverlay />
        <div className="fixed inset-0 flex w-screen">
          <DialogPanel className="max-w-lg space-y-4 bg-stone-50">
            {/* <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description> */}
            <div className="flex h-min w-72 shrink-0 flex-col gap-14 pt-10">
              <SidebarNavigation />
              <SidebarConnect />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
