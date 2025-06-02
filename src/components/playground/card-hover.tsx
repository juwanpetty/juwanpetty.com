import { Icons } from "@/components/icons";

export function CardHover() {
  return (
    <div className="bg-neutral-1/75 relative -mx-5 w-[calc(100%+40px)] overflow-hidden sm:mx-0 sm:w-full md:rounded-xl dark:bg-[#0D0D0C]">
      <div className="border-neutral-4 pointer-events-none absolute inset-0 z-10 border border-r-0 border-l-0 sm:border-r sm:border-l md:rounded-xl" />
      <div className="p-6">
        <a
          href="#"
          className="border-neutral-4 group mx-auto flex size-85 items-end overflow-y-hidden rounded-2xl border bg-white shadow-xs"
        >
          <div className="bg-neutral-2 border-neutral-4 relative m-1.5 w-full translate-y-[calc(100%+6px+1px)] rounded-xl border p-3.5 pt-2.5 shadow-2xs transition-transform group-hover:translate-y-0 group-focus-visible:translate-y-0">
            <h3 className="text-sm font-medium">Project name</h3>
            <p className="mt-1 text-sm">Project description</p>

            <Icons
              icon="arrowUpRight"
              className="absolute top-4 right-4 size-4"
            />
          </div>
        </a>
      </div>
    </div>
  );
}
