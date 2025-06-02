import { Icons, IconsMap } from "@/components/icons";
import { cn } from "@/utilities/merge-classnames";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function PageSection({ children, className }: SectionProps) {
  return (
    <section className={cn("space-y-7 py-8", className)}>{children}</section>
  );
}

interface SectionHeaderProps {
  title: string;
  icon: keyof typeof IconsMap;
}

export function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icons icon={icon} className="text-neutral-11 size-5" />
      <h2 className="text-neutral-11 text-sm font-medium">{title}</h2>
      <div className="bg-neutral-12/10 h-px grow" />
    </div>
  );
}
