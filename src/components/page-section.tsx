import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  title: string;
};

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section>
      <h2 className="border-b border-neutral-950/5 pb-4 text-2xl font-medium tracking-tight text-neutral-950 dark:border-white/10 dark:text-white">
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}

// Example usage:
// <PageSection label="Craft">
//   <div className="mt-8 grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
//     ...content
//   </div>
// </PageSection>
