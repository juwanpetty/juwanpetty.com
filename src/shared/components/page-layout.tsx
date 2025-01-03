import { ReactNode } from "react";
import {
  Breadcrumb,
  type BreadcrumbLink,
} from "@/shared/components/breadcrumb";
import { Footer } from "@/shared/components/footer";

type Props = {
  children: ReactNode;
  breadcrumbLinks?: BreadcrumbLink[];
  title?: string;
  subtitle?: string;
};

export function PageLayout({
  children,
  title,
  subtitle,
  breadcrumbLinks,
}: Props) {
  const shouldShowHeader = title || subtitle;

  const titleMarkup = title ? (
    <h1 className="text-2xl font-semibold">{title}</h1>
  ) : null;

  const subtitleMarkup = subtitle ? (
    <p className="max-w-lg text-base text-neutral-500">{subtitle}</p>
  ) : null;

  return (
    <div className="relative grid min-h-[calc(100vh-3.5rem-1px)] py-6 lg:gap-10 lg:py-8 xl:grid-cols-[1fr_300px]">
      <div className="mx-auto flex w-full min-w-0 max-w-3xl flex-col">
        <Breadcrumb links={breadcrumbLinks} />
        <div className="flex-grow pb-24">
          {shouldShowHeader && (
            <section className="mb-16 space-y-2">
              {titleMarkup}
              {subtitleMarkup}
            </section>
          )}
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
