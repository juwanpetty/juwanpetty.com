import { Link } from "next-view-transitions";
import { url } from "@/lib/url";
import { LogoIcon } from "@/icons/LogoIcon";

export function Navbar() {
  return (
    <div className="sticky top-0 z-10 w-full bg-white/90 px-4 backdrop-blur-sm md:px-10">
      <div className="flex h-14 w-full items-center">
        <Link
          href={url.home()}
          className="flex size-8 items-center justify-center rounded-[0.625rem]"
        >
          <LogoIcon className="text-neutral-800" />
          <span className="sr-only">Go home</span>
        </Link>
      </div>
    </div>
  );
}
