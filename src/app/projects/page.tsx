import { Breadcrumb } from "@/components/breadcrumb";
import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SiteHeader } from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const breadcrumbLinks = [{ name: "Home", href: "/" }, { name: "Projects" }];

export default function ProjectsIndex() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-3xl px-5 pt-5 pb-15 md:pt-15 md:pb-32 lg:px-0">
          <div className="mb-4">
            <Breadcrumb links={breadcrumbLinks} />
          </div>

          <header className="space-y-1 md:space-y-2">
            <h1 className="text-2xl leading-8 font-semibold tracking-[-0.3px]">
              My Projects
            </h1>
            <p className="max-w-[635px] text-base tracking-[-0.2px] text-neutral-500">
              Things that will make your life a little easier. Here are some of
              the other services created by Craftwork to help you be more
              productive.
            </p>
          </header>

          <div className="my-10 h-px bg-neutral-900/5 md:my-15" />

          <div className="flex flex-col gap-15">
            <section className="mb-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-15 lg:grid-cols-2">
                <div>
                  <ImagePlaceholder className="mb-6 aspect-[1.3] rounded-2xl" />

                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg leading-6.5 font-medium tracking-[-0.2px]">
                        Medium length headline
                      </h3>
                      <p className="text-sm tracking-[-0.1px] text-neutral-500">
                        Design better and spend less time without restricting
                        creative freedom.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-3.5 py-1.5 shadow-xs md:w-fit"
                    >
                      <span className="text-sm font-medium tracking-[-0.1px]">
                        Button
                      </span>
                      <Icons
                        icon="arrowUpRight"
                        className="size-4 text-neutral-500"
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <ImagePlaceholder className="mb-6 aspect-[1.3] rounded-2xl" />

                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg leading-6.5 font-medium tracking-[-0.2px]">
                        Medium length headline
                      </h3>
                      <p className="text-sm tracking-[-0.1px] text-neutral-500">
                        Design better and spend less time without restricting
                        creative freedom.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-3.5 py-1.5 shadow-xs md:w-fit"
                    >
                      <span className="text-sm font-medium tracking-[-0.1px]">
                        Button
                      </span>
                      <Icons
                        icon="arrowUpRight"
                        className="size-4 text-neutral-500"
                      />
                    </button>
                  </div>
                </div>

                <div>
                  <ImagePlaceholder className="mb-6 aspect-[1.3] rounded-2xl" />

                  <div className="flex flex-col items-start gap-5">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg leading-6.5 font-medium tracking-[-0.2px]">
                        Medium length headline
                      </h3>
                      <p className="text-sm tracking-[-0.1px] text-neutral-500">
                        Design better and spend less time without restricting
                        creative freedom.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-3.5 py-1.5 shadow-xs md:w-fit"
                    >
                      <span className="text-sm font-medium tracking-[-0.1px]">
                        Button
                      </span>
                      <Icons
                        icon="arrowUpRight"
                        className="size-4 text-neutral-500"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
