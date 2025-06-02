import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "next-view-transitions";

export function SiteHeader() {
  return (
    <div className="border-neutral-12/10 sticky top-0 z-50 flex w-full items-center border-b bg-white">
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[1400px] items-center justify-between px-5">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <Icons icon="logo" className="size-6" />
            <span className="sr-only">Go to homepage</span>
          </Link>
        </div>

        <div className="flex items-center gap-0.5">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
