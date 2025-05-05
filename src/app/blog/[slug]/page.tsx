import { Breadcrumb } from "@/components/breadcrumb";
import { SiteHeader } from "@/components/site-header";
import { ImagePlaceholder } from "@/components/image-placeholder";

export default async function BlogDetail() {
  const breadcrumbLinks = [
    { href: "/", name: "Craftwork" },
    { href: "/blog", name: "Digests" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-[730px] px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          <Breadcrumb links={breadcrumbLinks} />

          <h1 className="my-5 text-4xl font-bold tracking-tight">
            Craftwork Design Digest #10
          </h1>

          <div className="mt-5 flex items-center gap-[30px] text-neutral-500">
            <div className="flex items-center gap-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M16 3l0 4"></path>
                <path d="M8 3l0 4"></path>
                <path d="M4 11l16 0"></path>
                <path d="M8 15h2v2h-2z"></path>
              </svg>
              <p className="text-[16px] leading-[22px] font-normal tracking-[-0.32px]">
                16 April 2025
              </p>
            </div>
          </div>

          <ImagePlaceholder className="mt-5 aspect-video" />

          <div className="prose prose-neutral mt-8">
            <p>Welcome to the tenth edition of Craftwork Design Digest!</p>
            <p>
              Each week, we&apos;ll bring you a curated collection of the best
              design news, inspiration, articles, events, design resources,
              expert tips and more – all in one convenient place, just for you.
              Whether you&apos;re a designer, creator, or just someone who loves
              good design, we&apos;ve got you covered with fresh content to fuel
              your creativity.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
