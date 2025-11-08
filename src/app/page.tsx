import { BlogList } from "@/components/blog-list";
import { ProjectList } from "@/components/project-list";
import { ResourceList } from "@/components/resource-list";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function HomeIndex() {
  return (
    <div>
      <div className="mb-12">
        <div className="mb-4">
          <div className="size-16 rounded-full border border-neutral-200 bg-neutral-100" />
        </div>
        <h1 className="text-base font-medium">Juwan Petty</h1>
        <p className="text-neutral-500">Software design & engineering</p>
      </div>

      <div className="space-y-16">
        <div>
          <p className="text-base leading-relaxed">
            Obsessed with the details that make digital products feel{" "}
            <i>just</i> right. Design-minded dev and dev-minded designer.
          </p>
        </div>

        {/* <div>
          <div className="grid gap-6 sm:grid-cols-3">
            <a className="group flex flex-col no-underline" href="/craft">
              <span className="text-base font-medium">About</span>
              <span className="shrink-0 text-base text-neutral-500">
                Who, what, why
              </span>
            </a>

            <a className="group flex flex-col no-underline" href="/bookmarks">
              <span className="text-base font-medium">Now</span>
              <span className="shrink-0 text-base text-neutral-500">
                Short term focus
              </span>
            </a>

            <a className="group flex flex-col no-underline" href="/bookmarks">
              <span className="text-base font-medium">Someday</span>
              <span className="shrink-0 text-base text-neutral-500">
                Long-term goals
              </span>
            </a>
          </div>
        </div> */}

        <PageSection title="Projects">
          <ProjectList />
        </PageSection>

        <PageSection title="Posts" href="/blog">
          <BlogList />
        </PageSection>

        <PageSection title="Resources">
          <ResourceList />
        </PageSection>
      </div>
    </div>
  );
}

type PageSectionProps = PropsWithChildren & {
  title: string;
  href?: string;
};

function PageSection({ title, children, href }: PageSectionProps) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between text-base font-medium text-neutral-500">
        <h2>{title}</h2>
        {href ? (
          <Link href={href} className="underline-offset-3 hover:underline">
            See all
          </Link>
        ) : null}
      </div>

      {children}
    </section>
  );
}
