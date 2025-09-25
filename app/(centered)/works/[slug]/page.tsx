import { Icon } from "@/components/icon";
import { getWork, getWorkSlugs } from "@/features/works/utilities";
import Link from "next/link";

type WorkDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkDetailsPage({
  params,
}: WorkDetailsPageProps) {
  const { slug } = await params;
  const { content: Content } = await getWork(slug);

  return (
    <div>
      <header className="mb-15">
        <h1 className="mb-5 text-base font-semibold text-neutral-800">
          Code Editing Toolbar
        </h1>

        <p className="text-base leading-relaxed text-neutral-500">
          We recently shipped{" "}
          <Link
            href="/"
            className="underline decoration-neutral-200 underline-offset-3"
          >
            code editing in v0
          </Link>
          , and I wanted to play around with the way the toolbar moves and
          transitions after you edit and save some code.
        </p>
      </header>

      <div className="mb-15">
        <div className="space-y-6 text-base md:space-y-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr]">
            <span className="text-neutral-500">Client</span>
            <span>ACME Studio</span>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr]">
            <span className="text-neutral-500">Services</span>
            <span>Design System, Branding</span>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr]">
            <span className="text-neutral-500">Year</span>
            <span>2024</span>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr]">
            <span className="text-neutral-500">Credit</span>
            <Link
              href="/"
              className="inline-flex items-center gap-x-1.5 justify-self-start"
            >
              <span className="underline decoration-neutral-200 underline-offset-3">
                Website
              </span>
              <Icon
                name="arrow-up-right"
                className="size-4.5 text-neutral-500"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* <Content /> */}
    </div>
  );
}

export async function generateStaticParams() {
  return await getWorkSlugs();
}

export const dynamicParams = false;
