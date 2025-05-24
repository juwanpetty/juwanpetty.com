import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "next-view-transitions";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="mx-auto flex h-[var(--header-height)] w-full items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Icons icon="logo" className="size-8" />
            <span className="sr-only">Acme</span>
          </Link>

          <Link
            href="/projects"
            className="hidden text-sm font-medium text-neutral-700 sm:block"
          >
            Projects
          </Link>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-neutral-700 sm:block"
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-neutral-700 sm:block"
          >
            Store
          </Link>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1"
          >
            <Icons icon="search" className="size-4 text-neutral-900" />

            <div className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-1.5 py-0.5 text-neutral-900">
              <Icons icon="command" className="size-4 text-neutral-900" />
              <span className="pr-1 text-sm font-medium">K</span>
            </div>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
