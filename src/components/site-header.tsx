import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteHeader() {
  return (
    <div
      className={cn(
        "bg-background flex h-14 items-center justify-between gap-x-8 px-4 sm:px-6",
        "sticky top-0 z-50 w-full"
      )}
    >
      <div>
        <Link
          href="/"
          className="flex size-8 items-center justify-center rounded-lg"
        >
          <svg
            fill="none"
            height="48"
            viewBox="0 0 38 48"
            width="38"
            className="text-gray-12 size-7"
          >
            <path
              d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>

      <nav className="flex items-center gap-1">
        <Link
          href="/work"
          className="text-gray-11 hover:text-gray-12 flex h-8 items-center rounded-lg px-2.5 text-sm font-medium transition-colors"
        >
          <span className="px-1">Work</span>
        </Link>
        <Link
          href="/blog"
          className="text-gray-11 hover:text-gray-12 flex h-8 items-center rounded-lg px-2.5 text-sm font-medium transition-colors"
        >
          <span className="px-1">Blog</span>
        </Link>
      </nav>
    </div>
  );
}
