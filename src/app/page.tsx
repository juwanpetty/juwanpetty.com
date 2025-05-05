import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SiteHeader } from "@/components/site-header";
import { Link } from "next-view-transitions";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-6xl px-5 pt-15 pb-15 md:pb-32 xl:px-0">
          <header className="mb-12 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h1 className="my-5 text-4xl font-bold tracking-tight">
                Craftwork
              </h1>
              <p className="max-w-[635px] text-base text-neutral-500 md:text-lg">
                Every week, we curate a selection of the latest news, tutorials,
                resources, tools, and new products in the design world. Stay up
                to date with everything that matters, all in one place.
              </p>
            </div>
          </header>

          <div>
            <div className="mt-15 mb-2 flex items-center justify-between sm:mt-20 sm:mb-4">
              <h3 className="text-xl font-semibold tracking-[-0.66px]">
                Latest Digests
              </h3>

              <Link href="/blog" className="flex items-center text-neutral-700">
                <span className="text-base">Explore digests</span>
                <Icons.chevronRightSmall className="ml-2 h-3 w-3 text-neutral-500" />
              </Link>
            </div>

            <div className="h-px w-full bg-neutral-200" />

            <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:grid-rows-2">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-5">
                <a href="#">
                  <ImagePlaceholder className="aspect-video" />
                </a>

                <div className="flex flex-col">
                  <a href="#" className="mb-2.5 text-lg font-medium">
                    Design Digest #10
                  </a>
                  <a
                    href="#"
                    className="mb-2 text-sm font-medium text-neutral-500"
                  >
                    16 April 2025
                  </a>
                  <p className="text-base text-neutral-500">
                    Why Aren&apos;t More Designers Becoming Founders, Magic
                    Animator and more
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-5">
                <a href="#">
                  <ImagePlaceholder className="aspect-video" />
                </a>

                <div className="flex flex-col">
                  <a href="#" className="mb-2.5 text-lg font-medium">
                    Design Digest #10
                  </a>
                  <a
                    href="#"
                    className="mb-2 text-sm font-medium text-neutral-500"
                  >
                    16 April 2025
                  </a>
                  <p className="text-base text-neutral-500">
                    Why Aren&apos;t More Designers Becoming Founders, Magic
                    Animator and more
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:gap-5">
                <a href="#">
                  <ImagePlaceholder className="aspect-video" />
                </a>

                <div className="flex flex-col">
                  <a href="#" className="mb-2.5 text-lg font-medium">
                    Design Digest #10
                  </a>
                  <a
                    href="#"
                    className="mb-2 text-sm font-medium text-neutral-500"
                  >
                    16 April 2025
                  </a>
                  <p className="text-base text-neutral-500">
                    Why Aren&apos;t More Designers Becoming Founders, Magic
                    Animator and more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
