import { AppNav } from "@/components/app-nav";
import { Header } from "@/components/header";

export function MainLayout() {
  return (
    <div>
      <Header />
      <div className="flex">
        <aside className="hidden w-60 border-r border-solid border-neutral-200 md:block">
          <div className="no-scrollbar sticky top-0 flex min-h-[calc(100vh_-_var(--header-height))] flex-col gap-5 overflow-y-auto px-4 pt-4 pb-6">
            <AppNav />
          </div>
        </aside>
        <div className="mx-auto max-w-[1870px] flex-1 px-5 md:px-12">
          <main className="mx-auto mt-10 flex flex-col md:mt-15">Main</main>
        </div>
      </div>
      <footer className="mx-5 border-t border-neutral-200 pt-15 md:hidden md:pt-20 xl:mx-0 xl:px-5">
        <div className="mx-auto max-w-5xl">Footer</div>
      </footer>
    </div>
  );
}
