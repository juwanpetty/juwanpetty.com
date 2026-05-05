import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export type PageProps = {
  children: React.ReactNode;
} & ComponentProps<"div">;

function PageRoot({ children, className }: PageProps) {
  return <div className={cn("mx-auto max-w-2xl", className)}>{children}</div>;
}

type BreadcrumbItem = { label: string; href: string };

export type PageHeaderProps = {
  breadcrumbs?: BreadcrumbItem[];
} & ComponentProps<"header">;

function PageHeader({ children, className }: PageHeaderProps) {
  return <header className={cn("max-w-3xl", className)}>{children}</header>;
}

function PageTitle({ children }: ComponentProps<"h1">) {
  return (
    <h1 className="text-gray-12 max-w-3xl text-lg font-semibold text-balance">
      {children}
    </h1>
  );
}

function PageDescription({ children, className }: ComponentProps<"div">) {
  return (
    <div className={cn("text-gray-11 max-w-3xl text-base/relaxed", className)}>
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
