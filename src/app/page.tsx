import type { Metadata } from "next";
import { MainLayout } from "@features/layout/components/MainLayout";
import { ImagePlaceholder } from "@components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

async function Home() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <div className="mb-16">
          <div className="mb-6 flex gap-4">
            <ImagePlaceholder className="h-[80px] w-[80px]" />
            <div>
              <h1 className="text-xl font-medium text-neutral-900">
                Juwan Petty
              </h1>
              <p className="text-base text-neutral-500">
                Frontend Engineer at Shopify
              </p>
            </div>
          </div>
          <p className="border-b border-solid border-neutral-200 pb-8 text-base text-neutral-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-[auto_1fr] gap-4">
            <ImagePlaceholder className="h-10 w-10" />
            <div>
              <div className="mb-2 flex items-center justify-start gap-3 pr-3">
                <h2 className="flex items-center text-base font-medium text-neutral-900">
                  Curations
                </h2>
                <span className="text-base font-medium text-neutral-500">
                  3d
                </span>
              </div>
              <p className="text-base text-neutral-700">
                A curated collection of the best products on the web
              </p>
              <ImagePlaceholder className="mt-4 aspect-video" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
