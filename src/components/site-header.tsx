import { Icons } from "@/components/icons";
import { MobileMenu } from "@/components/mobile-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "next-view-transitions";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 h-15 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <MobileMenu />

          <Link href="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M34 17C34 26.3888 26.3888 34 17 34C7.61116 34 0 26.3888 0 17C0 7.61116 7.61116 0 17 0C26.3888 0 34 7.61116 34 17ZM17.0805 19.4162C20.2138 14.9852 20.3521 12.2998 17.0805 7.55556C13.7465 12.401 14.1762 14.9694 17.0805 19.4162ZM15.5914 25.1878C16.0895 19.7838 14.8665 17.389 9.66113 14.9162C9.19652 20.7795 10.8529 22.7889 15.5914 25.1878ZM18.5883 25.1878C18.0903 19.7839 19.3132 17.3891 24.5186 14.9162C24.9832 20.7795 23.3269 22.7889 18.5883 25.1878Z"
                fill="black"
              />
            </svg>
            <span className="sr-only">Acme</span>
          </Link>

          <Link
            href="/blog"
            className="hidden text-base font-[450] text-neutral-700 sm:block"
          >
            Blog
          </Link>

          <button
            type="button"
            className="flex cursor-pointer items-center gap-1"
          >
            <Icons icon="search" className="h-5 w-5 text-neutral-500" />

            <div className="flex items-center gap-1.5 rounded-lg bg-neutral-100 px-1.5 py-0.5 text-neutral-500">
              <Icons icon="command" className="h-4 w-4" />
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
