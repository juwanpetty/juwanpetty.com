import {
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
  Breadcrumb,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { CraftCard } from "@/components/craft-card";
import { getAllCrafts } from "@/lib/crafts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
  description:
    "A collection of interactive coding snippets and experiments showcasing various programming concepts and techniques.",
};

export default async function CraftIndex() {
  const crafts = await getAllCrafts();

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Crafts</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-3xl">
        <header className="mt-10 space-y-1">
          <h2 className="text-base font-medium">Crafts</h2>
          <span className="text-base/7 text-neutral-700 dark:text-white/70">
            A collection of interactive coding snippets and experiments
            showcasing various programming concepts and techniques.
          </span>
        </header>

        <div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 pb-32 sm:grid-cols-2">
            {crafts.map((craft) => (
              <CraftCard
                key={craft.slug}
                slug={craft.slug}
                title={craft.title}
                video={craft.video}
              />
            ))}
          </div>
        </div>
      </div>
    </CenteredPageLayout>
  );
}
