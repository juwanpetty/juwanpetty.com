import { BadgeCheckIcon } from "@/icons/BadgeCheckIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { CircleUserIcon } from "@/icons/CircleUserIcon";
import { EnvelopeIcon } from "@/icons/EnvelopeIcon";
import { GraduationCapIcon } from "@/icons/GraduationCapIcon";
import { LogoIcon } from "@/icons/LogoIcon";
import { SuitcaseIcon } from "@/icons/SuitcaseIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-full w-full">
      <div className="sticky top-0 z-10 w-full bg-white/90 px-4 backdrop-blur-sm md:px-10 dark:bg-neutral-900/90">
        <div className="flex h-14 w-full items-center">
          <Link
            href={url.home()}
            className="flex size-8 items-center justify-center rounded-[0.625rem]"
          >
            <LogoIcon className="text-neutral-800 dark:text-neutral-200" />
            <span className="sr-only">Go home</span>
          </Link>
        </div>
      </div>

      <main className="p-4 py-6 pb-18 md:p-10 md:py-18">
        <div className="mx-auto max-w-xl">
          <header className="flex items-center gap-x-4">
            <div className="size-24 rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800" />

            <div className="flex flex-col items-start gap-2.5">
              <div>
                <h1 className="flex items-center gap-2 text-xl">
                  <span className="font-medium">Juwan Petty</span>
                  <BadgeCheckIcon className="size-4 text-sky-500" />
                </h1>
                <p className="text-sm text-neutral-500">
                  Design Engineer in Atlanta, Georgia
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7.5 items-center gap-0.5 rounded-full bg-amber-500 px-2.5 text-white dark:bg-amber-600">
                  <SuitcaseIcon className="size-4" />
                  <span className="px-1 text-sm font-medium">Open to work</span>
                </span>

                <a
                  href="mailto:jchpetty@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-7.5 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <EnvelopeIcon className="size-4" />
                  <span className="sr-only">Email me</span>
                </a>
              </div>
            </div>
          </header>

          <div className="mt-18 flex flex-col gap-18">
            <section className="flex flex-col gap-1">
              <div className="flex items-center gap-x-2">
                <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700 dark:text-neutral-400">
                  <CircleUserIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">About</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div>
                <p className="text-sm text-pretty text-neutral-500">
                  Obsessed with the details that make digital products feel{" "}
                  <i>just</i> right. Design-minded dev and dev-minded designer.
                </p>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-x-2">
                <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700 dark:text-neutral-400">
                  <BoltIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                  <span className="text-sm text-neutral-500">2020 — 2025</span>
                  <div className="flex flex-col">
                    <h2 className="flex text-sm font-medium text-balance">
                      Frontend Engineer at Shopify
                    </h2>
                    <p className="text-sm text-neutral-500">Remote</p>

                    <div className="mt-2.5">
                      <p className="text-sm text-neutral-500">
                        Built merchant-facing marketing tools like email
                        automation, campaign workflows, and reporting
                        dashboards.
                      </p>
                    </div>

                    <div>
                      <div className="mt-4 flex h-32 gap-2 overflow-x-auto">
                        <div className="aspect-video h-full overflow-hidden rounded-lg">
                          <Image
                            src="/images/integrated-campaigns.png"
                            width={1280}
                            height={720}
                            alt="Integrated Campaigns"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                  <span className="text-sm text-neutral-500">2018 — 2019</span>
                  <div className="flex flex-col">
                    <h2 className="text-sm font-medium text-balance">
                      Web Developer Intern at Shopify
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">Toronto, ON</p>

                    <div className="mt-2.5">
                      <p className="text-sm text-neutral-500">
                        Worked on first-party Facebook Ads tools within
                        Shopify’s Marketing section, helping merchants create
                        and manage ad campaigns directly in-platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                  <span className="text-sm text-neutral-500">2017 — 2018</span>
                  <div className="flex flex-col">
                    <h2 className="text-sm font-medium text-balance">
                      Frontend Developer Intern at Georgia Departmant of
                      Administrative Services
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">Atlanta, GA</p>

                    <div className="mt-2.5">
                      <p className="text-sm text-neutral-500">
                        Redesigned and rebuilt internal-facing government web
                        pages for better usability and mobile responsiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-x-2">
                <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700 dark:text-neutral-400">
                  <GraduationCapIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">Education</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                <span className="text-sm text-neutral-500">2015 — 2020</span>
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium text-balance">
                    Bachelor of Science at Kennesaw State University
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">Kennesaw, GA</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
