import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto flex flex-col">
      <Header />
      <div className="flex gap-4 pt-[var(--header-height)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
