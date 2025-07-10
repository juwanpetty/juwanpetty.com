import { LayoutLeftIcon } from "@/icons/LayoutLeftIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";

interface NavbarProps extends React.ComponentProps<"div"> {
  setIsMobileDialogOpen: (open: boolean) => void;
  isMobileDialogOpen: boolean;
}

export function Navbar({
  setIsMobileDialogOpen,
  isMobileDialogOpen,
  ...props
}: NavbarProps) {
  function handleToggleSidebar() {
    setIsMobileDialogOpen(!isMobileDialogOpen);
  }

  return (
    <div
      className="fixed top-0 z-10 w-full bg-white/90 backdrop-blur-sm dark:bg-neutral-900/90"
      {...props}
    >
      <div className="flex h-14 items-center px-4">
        <div className="flex flex-1 items-center">
          <button
            type="button"
            className="flex size-8 items-center justify-center md:hidden"
            onClick={handleToggleSidebar}
          >
            <LayoutLeftIcon className="size-4.5" />
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <div className="size-8 rounded-full border border-solid border-black/10 bg-neutral-50 max-md:hidden dark:border-white/10 dark:bg-neutral-950" />
        </div>
        <SiteNavigation />
      </div>
    </div>
  );
}

function SiteNavigationLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
    >
      {label}
    </Link>
  );
}

function SiteNavigation() {
  return (
    <nav className="flex flex-1 items-center justify-end">
      <div className="flex gap-6 px-4">
        <SiteNavigationLink href={url.projectIndex()} label="Projects" />
        <SiteNavigationLink href={url.thoughtsIndex()} label="Thoughts" />
        <SiteNavigationLink href={url.componentsIndex()} label="Components" />
      </div>
    </nav>
  );
}
