import { ReactNode } from "react";
import { Link } from "next-view-transitions";

export function PageSection({ children }: { children?: ReactNode }) {
  return <section className="flex flex-col gap-5 py-8">{children}</section>;
}

export function PageSectionContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

export function PageSectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      {children}
      <span className="flex flex-1 shrink border-t border-dashed border-black/15 dark:border-white/15" />
    </div>
  );
}

export function PageSectionLabel({
  slug,
  children,
}: {
  slug?: string;
  children: ReactNode;
}) {
  return (
    <div className="text-sm font-medium text-neutral-600 dark:text-white/70">
      {slug ? (
        <Link
          href={slug}
          className="-ml-2 flex items-center gap-2 rounded-md px-2 py-1 transition-colors duration-150 hover:bg-black/10 hover:dark:bg-white/8"
        >
          {children}
        </Link>
      ) : (
        <span className="-ml-2 flex items-center gap-2 px-2 py-1">
          {children}
        </span>
      )}
    </div>
  );
}
