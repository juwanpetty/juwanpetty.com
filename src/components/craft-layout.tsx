import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { type CraftWithSlug } from "@/lib/crafts";
import { url } from "@/lib/url";

export function CraftLayout({
  craft,
  children,
}: {
  craft: CraftWithSlug;
  children: React.ReactNode;
}) {
  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator className="max-md:hidden" />
          <Breadcrumb href={url.craftIndex()} className="max-md:hidden">
            Crafts
          </Breadcrumb>
          <BreadcrumbSeparator />
          <Breadcrumb>{craft.title}</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-2xl">
        <article className="w-full flex-1">
          <header className="mt-10 flex flex-col">
            <h1 className="scroll-m-4 text-xl font-medium">{craft.title}</h1>
          </header>
          <div id="content" className="mt-6">
            {children}
          </div>
        </article>
      </div>
    </CenteredPageLayout>
  );
}
