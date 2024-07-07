import React from "react";
import { Page } from "@/shared/Page";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

async function Reading() {
  return (
    <Page>
      <section className="mb-16">
        <h2 className="mb-3 text-base font-medium">2024</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">
                The Art of Code Crafting by Jane Doe
              </span>
            </a>
            <div className="px-4">
              <a href="https://google.com">
                <h2 className="text-base font-medium text-sand-12">
                  The Art of Code Crafting
                </h2>
              </a>
              <span className="text-balance text-base text-sand-11">
                by Jane Doe
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">
                Advanced Frontend Techniques by Alex Johnson
              </span>
            </a>
            <div className="px-4">
              <a href="https://google.com">
                <h2 className="text-base font-medium text-sand-12">
                  Advanced Frontend Techniques
                </h2>
              </a>
              <span className="text-balance text-base text-sand-11">
                by Alex Johnson
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">
                Mastering Web Interfaces by John Smith
              </span>
            </a>
            <div className="px-4">
              <a href="https://google.com">
                <h2 className="text-base font-medium text-sand-12">
                  Mastering Web Interfaces
                </h2>
              </a>
              <span className="text-balance text-base text-sand-11">
                by John Smith
              </span>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Reading;
