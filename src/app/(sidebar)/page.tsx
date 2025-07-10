import { url } from "@/lib/url";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { ExternalLinkIcon } from "@/icons/ExternalLinkIcon";
import { Link } from "next-view-transitions";

function ResourceCard({}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 rounded-lg p-3 transition-colors hover:bg-neutral-50">
      <div className="size-10 shrink-0 rounded-md border border-black/10 bg-neutral-50" />
      <div className="grid grid-cols-1 gap-1">
        <h3 className="text-base/4 font-medium">Resource</h3>
        <p className="truncate text-sm/4 text-neutral-500">
          Description of resource
        </p>
      </div>
    </div>
  );
}

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

function ComponentsCard({}) {
  return (
    <Link
      href={url.componentsIndex()}
      className="flex flex-col overflow-hidden rounded-lg border border-black/10"
    >
      <div className="relative isolate aspect-video overflow-hidden" />
      <div className="flex flex-col overflow-auto border-t border-black/10 bg-neutral-50 p-4">
        <h3 className="truncate text-base font-medium text-neutral-800">
          Component Title
        </h3>
      </div>
    </Link>
  );
}

export default async function Page() {
  return (
    <SidebarLayoutContent>
      <div className="flex w-full max-w-5xl flex-1 flex-col gap-18 px-4 py-8 md:px-6 md:py-12 xl:mx-auto xl:px-12">
        <section className="flex flex-col gap-6 rounded-lg border border-black/10 p-3">
          <div className="flex flex-col gap-1 px-3 pt-3">
            <h2 className="text-base font-medium">Resources</h2>
            <p className="text-sm/6 text-neutral-500">
              Curated list of design & tech resources.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </section>

        <section>
          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:gap-y-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-lg border border-black/10 p-3">
          <div className="flex flex-col gap-1 px-3 pt-3">
            <h2 className="text-base font-medium">Thoughts</h2>
            <p className="text-sm/6 text-neutral-500">
              Sharing experiences, knowledge and videos on design & tech.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </section>

        <section>
          <div className="grid w-full grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:grid-cols-3 lg:gap-y-8">
            <ComponentsCard />
            <ComponentsCard />
            <ComponentsCard />
          </div>
        </section>
      </div>
    </SidebarLayoutContent>
  );
}
