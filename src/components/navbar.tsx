import { url } from "@/lib/url";
import { Link } from "next-view-transitions";

export function Navbar({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-between gap-x-8 bg-white/90 px-4 py-4 backdrop-blur-sm sm:px-6 dark:bg-neutral-900/90"
      {...props}
    >
      {children}
      <SiteNavigation />
    </div>
  );
}

function SiteNavigation() {
  return (
    <nav className="flex items-center">
      <div className="flex gap-x-6 text-sm/6 text-gray-900 max-md:hidden dark:text-white">
        <Link href={url.blogIndex()}>Blog</Link>
        <Link href={url.craftIndex()}>Crafts</Link>
      </div>
    </nav>
  );
}
