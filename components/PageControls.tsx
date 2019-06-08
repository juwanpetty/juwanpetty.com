import React from "react";
import { Breadcrumbs } from "../shared/Breadcrumbs";
import { MobileSidebar } from "./MobileSidebar";
import { ThemeSwitcher } from "./ThemeSwitcher";

type Props = {
  breadcrumbs?: { label: string; href: string }[];
};

function PageControls({ breadcrumbs }: Props) {
  return (
    <div className="fixed left-0 top-0 flex min-h-12 w-full items-center justify-between border-b border-stone-200 bg-stone-50 px-4 md:sticky md:min-h-10">
      <div className="flex items-center gap-2">
        <MobileSidebar />
      </div>

      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}

      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center md:hidden">
          <ThemeSwitcher />
        </span>
      </div>
    </div>
  );
}

export default PageControls;
