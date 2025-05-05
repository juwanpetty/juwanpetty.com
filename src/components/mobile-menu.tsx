"use client";

import { Icons } from "@/components/icons";
import { useState } from "react";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const activator = (
    <button
      type="button"
      className="-mr-3 h-5 w-5 md:hidden"
      onClick={toggleOpen}
    >
      <Icons.menu className="h-5 w-5 text-neutral-900" />
    </button>
  );

  return (
    <>
      <MobileMenuDrawer open={open} onChange={setOpen} activator={activator} />
    </>
  );
}

interface MobileMenuDrawerProps {
  open: boolean;
  onChange?: (open: boolean) => void;
  activator: React.ReactNode;
}

function MobileMenuDrawer({
  open,
  onChange,
  activator,
}: MobileMenuDrawerProps) {
  return null;
  // <Drawer open={open} onOpenChange={onChange}>
  //   <DrawerTrigger asChild>{activator}</DrawerTrigger>
  //   <DrawerContent className="fixed right-0 bottom-0 left-0 mt-24 flex h-full max-h-[96%] flex-col rounded-t-[10px] bg-gray-100 lg:h-fit">
  //     <DrawerHeader>
  //       <DrawerTitle>Are you absolutely sure?</DrawerTitle>
  //       <DrawerDescription>This action cannot be undone.</DrawerDescription>
  //     </DrawerHeader>
  //     <DrawerFooter>
  //       {/* <Button>Submit</Button> */}
  //       <DrawerClose>
  //         {/* <Button variant="outline">Cancel</Button> */}
  //       </DrawerClose>
  //     </DrawerFooter>
  //   </DrawerContent>
  // </Drawer>
}
