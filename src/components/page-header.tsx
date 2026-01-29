import { PropsWithChildren } from "react";

export function PageHeader({ children }: PropsWithChildren) {
  return <div className="space-y-6">{children}</div>;
}

function PageHeaderTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="text-secondary-foreground text-3xl tracking-tight">
      {children}
    </h1>
  );
}

function PageHeaderDescription({ children }: PropsWithChildren) {
  return (
    <div className="text-muted-foreground flex flex-col gap-6 text-base/7">
      {children}
    </div>
  );
}

function PageHeaderActions({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-3">{children}</div>;
}

PageHeader.Title = PageHeaderTitle;
PageHeader.Description = PageHeaderDescription;
PageHeader.Actions = PageHeaderActions;
