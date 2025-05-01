import { Breadcrumb } from "@/components/breadcrumb";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { SiteHeader } from "@/components/site-header";

export default async function BlogIndex() {
  const breadcrumbLinks = [
    { name: "Craftwork", href: "#" },
    { name: "Digests", href: "#" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-3xl px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          <Breadcrumb links={breadcrumbLinks} />

          <header className="mb-12 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h1 className="my-5 text-4xl font-bold tracking-tight">
                Craftwork Design Digests
              </h1>
              <p className="max-w-[635px] text-base text-neutral-500 md:text-lg">
                Every week, we curate a selection of the latest news, tutorials,
                resources, tools, and new products in the design world. Stay up
                to date with everything that matters, all in one place.
              </p>
            </div>
          </header>

          <div className="mt-10 md:mt-23">
            <p className="border-b border-neutral-200 pb-4 text-xl font-semibold tracking-[-0.66px]">
              Latest Digests
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-10 lg:gap-5">
            <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2 lg:gap-5">
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

            <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-2 lg:gap-5">
              <ImagePlaceholder className="aspect-video" />

              <div className="flex flex-col">
                <p className="mb-2.5 text-lg font-medium">Design Digest #9</p>
                <p className="mb-2 text-sm font-medium text-neutral-500">
                  9 April 2025
                </p>
                <p className="text-base text-neutral-500">
                  Design for the AI age, graphic design in Severance and much
                  more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
