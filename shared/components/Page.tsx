import { Environment } from "@/components/Environment";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type PageProps = {
  pageTitle?: string;
  children: React.ReactNode;
};

function Page({ pageTitle, children }: PageProps) {
  return (
    <div className="relative flex min-h-dvh flex-col pt-[var(--header-height)]">
      <Header pageTitle={pageTitle} />
      <main className="grow px-8 py-16">
        <div className="relative mx-auto w-full max-w-screen-sm">
          {children}
        </div>
      </main>
      <Footer />
      <Environment />
    </div>
  );
}

export { Page };
