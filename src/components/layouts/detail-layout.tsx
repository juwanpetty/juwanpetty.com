import { PageLayout } from "@/components/layouts/page-layout";
import { PageBackLink } from "@/components/page-back-link";
import { PrevNextNavigation } from "@/components/prev-next-navigation";
import { ReactNode } from "react";

type NavigableItem = {
  title: string;
  _meta: { path: string };
};

type DetailLayoutProps = {
  children: ReactNode;
  baseUrl: string;
  previous?: NavigableItem | null;
  next?: NavigableItem | null;
};

export function DetailLayout({
  children,
  baseUrl,
  previous,
  next,
}: DetailLayoutProps) {
  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl">
        <div className="mb-32 flex items-center">
          <PageBackLink href="/" label="Home" />
        </div>

        {children}

        <footer className="mt-16">
          <PrevNextNavigation
            baseUrl={baseUrl}
            previous={previous ?? undefined}
            next={next ?? undefined}
          />
        </footer>
      </div>
    </PageLayout>
  );
}
