import { BadgeCheckIcon } from "@/icons/BadgeCheckIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { EnvelopeIcon } from "@/icons/EnvelopeIcon";
import { LogoIcon } from "@/icons/LogoIcon";
import { SuitcaseIcon } from "@/icons/SuitcaseIcon";
import { url } from "@/lib/url";
import { Link } from "next-view-transitions";
import { Field, Input } from "@headlessui/react";
import { getAllArticles } from "@/lib/articles";
import { PenWritingIcon } from "@/icons/PenWritingIcon";
import Image from "next/image";

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <div className="h-full w-full">
      <div className="sticky top-0 z-10 w-full bg-white/90 px-4 backdrop-blur-sm md:px-10 dark:bg-neutral-900/90">
        <div className="flex h-14 w-full items-center justify-between">
          <Link
            href={url.home()}
            className="flex size-8 items-center justify-center rounded-[0.625rem]"
          >
            <LogoIcon className="text-neutral-800 dark:text-neutral-200" />
            <span className="sr-only">Go home</span>
          </Link>

          <nav className="flex items-center">
            <div className="flex gap-x-6 text-sm">
              <Link href={url.home()}>Home</Link>
              <Link href={url.about()}>About</Link>
            </div>
          </nav>
        </div>
      </div>

      <main className="p-4 py-6 pb-18 md:p-10 md:py-18">
        <div className="mx-auto max-w-xl">
          <header className="flex items-center gap-x-4">
            <div className="relative flex size-24 items-center justify-center overflow-hidden rounded-full border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800">
              <Image
                src="/images/profile-picture.png"
                alt="Juwan Petty"
                width={420}
                height={420}
                quality={1}
                className="w-4/5 translate-y-2 object-contain"
              />
            </div>

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
                <span className="flex h-7.5 items-center gap-0.5 rounded-full bg-neutral-100 px-2.5 text-neutral-500 dark:bg-neutral-800">
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
                  <PenWritingIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">Writing</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div className="flex flex-col gap-7">
                {articles.map((article) => (
                  <div className="flex items-center gap-4" key={article.slug}>
                    <Link href={url.blogDetail(article.slug)}>
                      <div className="relative aspect-3/4 h-22 overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-xs dark:border-neutral-700 dark:bg-neutral-800">
                        <Image
                          src={article.thumbnail.src}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                          className="h-full w-full rounded-lg"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-col items-start">
                      <Link
                        href={url.blogDetail(article.slug)}
                        className="flex text-sm font-medium text-balance hover:underline"
                      >
                        {article.title}
                      </Link>

                      <div className="mt-2">
                        <p className="line-clamp-2 text-sm text-neutral-500">
                          At the end of the day, we use our phones to
                          communicate and connect with people that matter most
                          to us.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-x-2">
                <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700 dark:text-neutral-400">
                  <BoltIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">Projects</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                  <span className="text-sm text-neutral-500">Ongoing</span>
                  <div className="flex flex-col items-start">
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=juwanpetty.github-icons-for-vscode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external flex text-sm font-medium text-balance hover:underline"
                    >
                      GitHub Icons
                    </a>

                    <div className="mt-2">
                      <p className="text-sm text-neutral-500">
                        A GitHub file icon theme for Visual Studio Code
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-[9rem_25rem]">
                  <span className="text-sm text-neutral-500">2018 — 2020</span>
                  <div className="flex flex-col items-start">
                    <a
                      href="https://github.com/juwanpetty/headlines"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external flex text-sm font-medium text-balance hover:underline"
                    >
                      Headlines
                    </a>

                    <div className="mt-2">
                      <p className="text-sm text-neutral-500">
                        Replace your new tab page with news based on sources you
                        choose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <div className="flex items-center gap-x-2">
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
                <div className="flex h-8 items-center gap-2 px-2 text-neutral-700 dark:text-neutral-400">
                  <EnvelopeIcon className="size-4.5 text-neutral-500" />
                  <span className="text-sm font-medium">Newsletter (Soon)</span>
                </div>
                <span className="flex flex-1 shrink border-t border-dashed border-neutral-300 dark:border-neutral-700" />
              </div>

              <div className="flex flex-col">
                <Field>
                  <div className="mt-2 grid grid-cols-1">
                    <Input
                      disabled
                      autoComplete="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      className="col-start-1 row-start-1 block h-10 w-full rounded-lg bg-neutral-100 pr-3 pl-10 text-sm outline-1 -outline-offset-1 outline-neutral-200 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 dark:bg-neutral-800 dark:outline-neutral-700 dark:placeholder:text-neutral-500"
                    />
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-neutral-500 sm:size-4"
                    />
                  </div>
                </Field>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
