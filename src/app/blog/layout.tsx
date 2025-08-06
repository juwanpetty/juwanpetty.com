import { LogoIcon } from "@/icons/LogoIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full w-full">
      <div className="sticky top-0 z-10 w-full bg-white/90 px-4 backdrop-blur-sm md:px-10 dark:bg-neutral-900/90">
        <div className="flex h-14 w-full items-center">
          <Link
            href={url.home()}
            className="flex size-8 items-center justify-center rounded-[0.625rem]"
          >
            <LogoIcon className="text-neutral-800 dark:text-neutral-200" />
            <span className="sr-only">Go home</span>
          </Link>
        </div>
      </div>

      <main className="p-4 py-6 pb-18 md:p-10 md:py-18">{children}</main>
    </div>
  );
}
