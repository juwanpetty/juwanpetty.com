import { Environment } from "@/components/Environment";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="relative flex min-h-dvh flex-col pt-[var(--header-height)]">
      {/* <div className="relative flex min-h-dvh flex-col"> */}
      <Header />
      <main className="grow px-8 py-16">{children}</main>
      {/* <main className="grow px-8 pb-16 pt-8">{children}</main> */}
      <Footer />
      {/* <Environment /> */}
    </div>
  );
}
