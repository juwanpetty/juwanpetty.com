import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex flex-1 grow flex-col">
        {/* <div className="flex-1 items-start sm:gap-6 md:grid md:grid-cols-[284px_minmax(0,1fr)] lg:grid-cols-[304px_minmax(0,1fr)] lg:gap-0"> */}
        {/* <div className="flex-1 items-start md:grid md:grid-cols-[284px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[304px_minmax(0,1fr)] lg:gap-10"> */}
        <div className="flex-1 items-start md:grid md:grid-cols-[284px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[304px_minmax(0,1fr)] lg:gap-10">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

{
  /* <div className="flex flex-1 flex-col">
  <SiteHeader />
  <main className="flex flex-1 grow flex-col">
    <div className="flex-1 items-start md:grid md:grid-cols-[284px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[304px_minmax(0,1fr)] lg:gap-10">
      <aside className="fixed top-14 z-10 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r border-neutral-100 md:sticky md:block">
        <div className="no-scrollbar h-full overflow-auto px-8 py-6 pr-4 lg:py-8">
          <AppNav />
        </div>
      </aside>
      <main className="px-4 py-6 md:gap-6 md:px-0 lg:py-8">
        <div className="flex justify-center lg:gap-10">
          <div className="w-full max-w-2xl">
            <h1 className="mb-2 text-2xl font-semibold tracking-tight">
              Open Case
            </h1>
            <span className="inline-block max-w-[500px] text-base text-neutral-700">
              A set of beautifully-designed, accessible, and customizable
              components to help you build your component library. Open Source.
            </span>
          </div>
          <aside className="hidden w-72 xl:block">aside</aside>
        </div>
      </main>
    </div>
  </main>
  <SiteFooter />
</div>; */
}
