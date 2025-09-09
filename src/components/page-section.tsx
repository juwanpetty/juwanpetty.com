import { Icon, IconName } from "@/components/icon";
import { PropsWithChildren } from "react";

type PageSectionProps = PropsWithChildren & {
  label: string;
  icon: IconName;
};

export function PageSection({ label, icon, children }: PageSectionProps) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center gap-x-2">
        <div className="-ml-2 flex h-8 items-center gap-2 px-2 text-neutral-700">
          <Icon name={icon} className="size-4.5 text-neutral-500" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="flex flex-1 shrink border-t border-dashed border-neutral-300" />
      </div>

      <div>{children}</div>
    </section>
  );
}
