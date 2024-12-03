import { ReactNode } from "react";
import { Sidebar } from "@/shared/components/sidebar";
import { SITE_NAME } from "@/shared/constants";
import { Metadata } from "next";
import { Navigation } from "@/shared/components/navigation";

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
};

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Navigation />
      <div className="relative mx-auto w-full max-w-screen-xl px-4 py-10 md:flex md:flex-row md:py-10">
        <div className="grid w-full md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
