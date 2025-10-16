import Link from "next/link";
import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  label: string;
  link?: {
    href: string;
    label: string;
  };
};

export function PageSection({ label, link, children }: PageSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-x-2">
        <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700">
          <span className="text-base font-medium">{label}</span>
        </div>
        <span className="flex flex-1 shrink border-t border-dashed border-neutral-300" />
        {link ? (
          <Link
            href={link.href}
            className="-mr-2 flex h-8 items-center gap-2 px-2 text-neutral-700"
          >
            <span className="text-base underline decoration-neutral-300 underline-offset-3">
              {link.label}
            </span>
          </Link>
        ) : null}
      </div>

      <div>{children}</div>
    </section>
  );
}
