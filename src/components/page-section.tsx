import { ComponentProps } from "react";

function PageSection({ children }: ComponentProps<"section">) {
  return <section>{children}</section>;
}

function PageSectionTitle({ children }: ComponentProps<"h2">) {
  return (
    <h2 className="text-secondary-foreground text-base font-medium">
      {children}
    </h2>
  );
}

function PageSectionContent({ children }: ComponentProps<"div">) {
  return <div>{children}</div>;
}

export { PageSection, PageSectionTitle, PageSectionContent };
