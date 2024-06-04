import React from "react";

type Props = {
  label?: string;
  children: React.ReactNode;
};

export function SidebarSection({ label, children }: Props) {
  return (
    <div>
      {label ? (
        <p className="mb-[10px] pl-4 text-xs font-medium">{label}</p>
      ) : null}
      <section className="flex flex-col gap-1 px-2">{children}</section>
    </div>
  );
}
