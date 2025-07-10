import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { ChevronLeftSmallIcon } from "@/icons/ChevronLeftSmallIcon";
import { ChevronRightSmallIcon } from "@/icons/ChevronRightSmallIcon";
import { MenuLeftIcon } from "@/icons/MenuLeftIcon";
import { type ArticleWithSlug } from "@/lib/articles";
import { url } from "@/lib/url";
import { formatDate } from "date-fns/format";
import { Link } from "next-view-transitions";

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug;
  children: React.ReactNode;
}) {
  return (
    <SidebarLayoutContent>
      <div className="flex w-full max-w-4xl flex-1 flex-col gap-6 px-4 pt-8 md:px-6 md:pt-12 xl:mx-auto xl:px-12">
        <h1 className="text-3xl font-semibold">{article.title}</h1>
        <p className="mb-8 text-lg text-neutral-500">{article.description}</p>

        <div id="content" className="prose">
          {children}
        </div>

        <section className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2">
          <Link
            href="/"
            className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-4 text-sm transition-colors @max-lg:col-span-full"
          >
            <div className="inline-flex items-center gap-1.5 font-medium">
              <ChevronLeftSmallIcon />
              <span>Ticker</span>
            </div>
            <p className="truncate text-neutral-500">
              A composable finance ticker for displaying symbols, prices and
              changes.
            </p>
          </Link>
          <Link
            href="/"
            className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-4 text-sm transition-colors @max-lg:col-span-full"
          >
            <div className="inline-flex items-center justify-end gap-1.5 font-medium">
              <span>Banner</span>
              <ChevronRightSmallIcon />
            </div>
            <p className="truncate text-neutral-500">
              A banner is a full-width component that can be used to show a
              message and action to the user.
            </p>
          </Link>
        </section>
      </div>

      <div className="sticky top-14 h-[calc(100dvh-3.5rem)] pt-12 pb-2 max-xl:hidden">
        <div className="flex h-full w-2xs max-w-full flex-col pe-4">
          <h3 className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <MenuLeftIcon className="size-4" />
            <span>On this page</span>
          </h3>
        </div>
      </div>
    </SidebarLayoutContent>
  );
}
