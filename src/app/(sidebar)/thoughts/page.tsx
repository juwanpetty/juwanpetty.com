import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";

function ArticleCard({}) {
  return (
    <Link
      href={url.thoughtsIndex()}
      className="flex flex-col overflow-hidden rounded-lg border border-black/10"
    >
      <div className="relative isolate aspect-video overflow-hidden" />
      <div className="flex flex-col overflow-auto border-t border-black/10 bg-neutral-50 p-4">
        <h3 className="truncate text-base font-medium text-neutral-800">
          Post Title
        </h3>

        <p className="truncate text-sm text-neutral-500">
          A brief description of the thought or article, summarizing its main
          points or insights.
        </p>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <SidebarLayoutContent>
      <div className="flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 md:px-6 md:py-12 xl:mx-auto xl:px-12">
        <h1 className="text-3xl font-semibold">Thoughts</h1>
        <p className="mb-8 text-lg text-neutral-500">
          All of my thoughts collected in chronological order.
        </p>

        <section className="grid w-full grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2 md:gap-y-6 lg:gap-y-8">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </section>
      </div>
    </SidebarLayoutContent>
  );
}
