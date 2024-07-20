import { Main } from "@components/Main";
import { Sidebar } from "@components/Sidebar";

type Props = {
  children: React.ReactNode;
};

export function MainLayout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <Main>{children}</Main>
    </>
  );
}
