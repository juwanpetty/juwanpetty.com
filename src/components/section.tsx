import { ComponentProps } from "react";

export type PageProps = {
  children: React.ReactNode;
} & ComponentProps<"section">;

function SectionRoot({ children }: PageProps) {
  return <section className="flex w-full flex-col gap-4">{children}</section>;
}

function SectionHeader({ children }: ComponentProps<"div">) {
  return <div>{children}</div>;
}

function SectionTitle({ children }: ComponentProps<"h2">) {
  return <h2 className="text-gray-12 text-base font-[550]">{children}</h2>;
}

function SectionDescription({ children }: ComponentProps<"div">) {
  return (
    <div className="text-gray-11 mt-1.5 max-w-140 text-base/7 text-pretty">
      {children}
    </div>
  );
}

function SectionContent({ children }: ComponentProps<"div">) {
  return <div>{children}</div>;
}

export const Section = {
  Root: SectionRoot,
  Header: SectionHeader,
  Title: SectionTitle,
  Description: SectionDescription,
  Content: SectionContent,
};
