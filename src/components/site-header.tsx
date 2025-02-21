import Link from "next/link";
import { MainNavigation } from "@/components/main-navigation";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { socialsConfig } from "@/config/socials";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-neutral-100 bg-white">
      <div className="flex h-14 w-full items-center px-4">
        <div className="mr-4 hidden w-full md:flex">
          <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
            <Icons.logo className="h-6 w-6 text-blue-400" />
            <span className="hidden font-bold lg:inline-block">
              {siteConfig.name}
            </span>
          </Link>

          <MainNavigation />

          <div className="ml-auto flex items-center gap-2 text-neutral-500">
            <a
              href={socialsConfig.github.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5"
            >
              <span className="sr-only">{socialsConfig.github.title}</span>
              <Icons.github className="h-5 w-5" />
            </a>
            <a
              href={socialsConfig.youtube.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5"
            >
              <span className="sr-only">{socialsConfig.youtube.url}</span>
              <Icons.youtube className="h-5 w-5" />
            </a>
            <a
              href={socialsConfig.bluesky.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-1.5"
            >
              <span className="sr-only">{socialsConfig.bluesky.title}</span>
              <Icons.bluesky className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
