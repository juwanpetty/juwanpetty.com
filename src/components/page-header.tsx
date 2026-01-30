import { ComponentProps } from "react";

export function PageHeader({ children }: ComponentProps<"header">) {
  return <div className="space-y-6">{children}</div>;
}

function PageHeaderTitle({ children }: ComponentProps<"h1">) {
  return (
    <h1 className="text-secondary-foreground text-2xl font-medium tracking-tight">
      {children}
    </h1>
  );
}

function PageHeaderDescription({ children }: ComponentProps<"div">) {
  return (
    <div className="text-muted-foreground flex flex-col gap-6 text-base/7">
      {children}
    </div>
  );
}

function PageHeaderActions({ children }: ComponentProps<"div">) {
  return <div className="flex items-center gap-3">{children}</div>;
}

export { PageHeaderTitle, PageHeaderDescription, PageHeaderActions };
