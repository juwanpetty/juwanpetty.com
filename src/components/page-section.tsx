import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  title: string;
};

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section>
      <h2 className="border-border text-secondary-foreground border-b pb-4 text-2xl font-medium tracking-tight">
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}

// Example usage:
// <PageSection title="Craft">
//   <div className="mt-8 grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
//     ...content
//   </div>
// </PageSection>
