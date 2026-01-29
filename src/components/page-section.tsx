import { ComponentProps } from "react";

function PageSection({ children }: ComponentProps<"section">) {
  return <section>{children}</section>;
}

function PageSectionTitle({ children }: ComponentProps<"h2">) {
  return (
    <h2 className="border-border text-secondary-foreground border-b pb-4 text-2xl font-medium tracking-tight">
      {children}
    </h2>
  );
}

function PageSectionContent({ children }: ComponentProps<"div">) {
  return <div>{children}</div>;
}

export { PageSection, PageSectionTitle, PageSectionContent };
