import { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/shared/Page";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Projects | Juwan Petty",
};

async function Projects() {
  return (
    <Page>
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <Link href="/projects/">
            <ImagePlaceholder className="aspect-video" />
          </Link>
          <div className="flex flex-col px-4">
            <Link href="/projects/">
              <h2 className="text-base font-medium text-sand-12">
                GitHub Icons
              </h2>
            </Link>
            <p className="text-pretty text-base text-sand-11">
              A GitHub file icon theme for Visual Studio Code.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/projects/">
            <ImagePlaceholder className="aspect-video" />
          </Link>
          <div className="flex flex-col px-4">
            <Link href="/projects/">
              <h2 className="text-base font-medium text-sand-12">
                Scheduled Tabs
              </h2>
            </Link>
            <p className="text-pretty text-base text-sand-11">
              A Chrome extension to schedule tabs for later.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Projects;
