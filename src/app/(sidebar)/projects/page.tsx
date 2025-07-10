import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";

function ProjectCard({}) {
  return (
    <Link
      href={url.projectIndex()}
      className="flex flex-col overflow-hidden rounded-lg border border-black/10"
    >
      <div className="relative isolate aspect-video overflow-hidden" />
      <div className="flex flex-col overflow-auto border-t border-black/10 bg-neutral-50 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-base font-medium text-neutral-800">
            Project Title
          </h3>
          <ExternalLinkIcon className="size-4 text-neutral-500" />
        </div>

        <p className="truncate text-sm text-neutral-500">
          A brief description of the project, summarizing its main features
        </p>
      </div>
    </Link>
  );
}

export default function Page() {
  return (
    <SidebarLayoutContent>
      <div className="flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8 md:px-6 md:py-12 xl:mx-auto xl:px-12">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="mb-8 text-lg text-neutral-500">
          A showcase of things I&apos;ve built, or helped push forward.
        </p>

        <section className="grid w-full grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:gap-y-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>
      </div>
    </SidebarLayoutContent>
  );
}
