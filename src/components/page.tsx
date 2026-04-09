import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type PageProps = {
  children: React.ReactNode;
} & ComponentProps<"div">;

function PageRoot({ children }: PageProps) {
  return <div className="mx-auto max-w-2xl">{children}</div>;
}

type BreadcrumbItem = { label: string; href: string };

export type PageHeaderProps = {
  breadcrumbs?: BreadcrumbItem[];
} & ComponentProps<"header">;

function PageHeader({ children }: PageHeaderProps) {
  return <header className="max-w-3xl">{children}</header>;
}

function PageTitle({ children }: ComponentProps<"h1">) {
  return (
    <h1 className="text-secondary-foreground text-xl font-semibold md:text-2xl">
      {children}
    </h1>
  );
}

function PageDescription({ children }: ComponentProps<"div">) {
  return (
    <div className="text-muted-foreground mt-3 flex flex-col gap-6 text-base/7 text-pretty">
      {children}
    </div>
  );
}

function PageContent({ children, className }: ComponentProps<"div">) {
  return <div className={cn(className)}>{children}</div>;
}

function PageActions({ children }: ComponentProps<"div">) {
  return <div className="mt-6 flex items-center gap-3">{children}</div>;
}

export const Page = {
  Root: PageRoot,
  Header: PageHeader,
  Title: PageTitle,
  Description: PageDescription,
  Actions: PageActions,
  Content: PageContent,
};
