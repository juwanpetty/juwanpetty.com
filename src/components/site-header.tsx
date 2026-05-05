import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteHeader() {
  return (
    <div
      className={cn(
        "dark:bg-gray-1 flex items-center justify-between gap-x-8 bg-white px-4 sm:px-6",
        "sticky top-0 z-50 w-full",
        "border-gray-4 border-b"
      )}
    >
      <div className="mx-auto flex h-12.5 w-full max-w-7xl items-center justify-between">
        <div>
          <Link
            href="/"
            className="flex size-8 items-center justify-center rounded-lg"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-12 size-7"
            >
              <path
                d="M10.2188 4.875C10.2188 7.82625 7.82625 10.2188 4.875 10.2188V13.7812H10.2188V19.125H13.7812C13.7812 16.1737 16.1737 13.7812 19.125 13.7812V10.2188H13.7812V4.875H10.2188Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <Link
            href="/work"
            className="text-gray-11 hover:text-gray-12 flex items-center rounded-lg text-sm font-medium transition-colors"
          >
            <span>Works</span>
          </Link>
          <Link
            href="/blog"
            className="text-gray-11 hover:text-gray-12 flex items-center rounded-lg text-sm font-medium transition-colors"
          >
            <span>Blog</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
