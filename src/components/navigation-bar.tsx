import { MenuIcon } from "@/icons/MenuIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";

export function NavigationBar() {
  return (
    <nav
      aria-label="navigation"
      className="sticky top-0 flex h-16 items-center border-b border-solid border-black/4 bg-white px-4 md:justify-end md:px-10"
    >
      <button className="flex size-8 items-center justify-center rounded-md md:hidden">
        <span className="sr-only">Toggle sidebar</span>
        <MenuIcon className="size-5" />
      </button>

      <nav className="flex items-center">
        <div className="flex gap-x-6 text-sm/6 text-neutral-900 max-sm:hidden dark:text-white">
          <Link href={url.blogIndex()}>Blog</Link>
          <Link href={url.craftIndex()}>Projects</Link>
          <Link href={url.about()}>About</Link>
        </div>
      </nav>
    </nav>
  );
}
