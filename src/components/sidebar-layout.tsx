import { AppSidebar } from "@/components/app-sidebar";
import { NavigationBar } from "@/components/navigation-bar";
import { ReactNode } from "react";

export function SidebarLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AppSidebar />
      <div className="h-full w-full md:pl-72">
        <NavigationBar />

        <main>
          <div className="p-4 md:p-10 md:pt-4">{children}</div>
        </main>
      </div>
    </div>
  );
}
