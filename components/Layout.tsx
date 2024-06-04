import { Sidebar } from "@/components/Sidebar";
import { SiteControls } from "@/components/SiteControls";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto flex flex-col">
      <SiteControls />
      <div className="flex gap-4 pt-14">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
