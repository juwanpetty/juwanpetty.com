import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="relative mx-auto flex flex-col">
      <Header />
      <div className="flex gap-4 md:px-4 md:pt-4">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
