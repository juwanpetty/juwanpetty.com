import { ScrollToTop } from "@/components/ScrollToTop";

export function Footer() {
  return (
    <footer className="flex h-12 items-center border-t border-solid border-sand-6 bg-sand-2 px-8 text-sand-11">
      <div className="mx-auto flex w-full max-w-screen-sm items-center justify-between">
        <ScrollToTop />
        <p className="text-sm">
          <span className="mr-1 cursor-pointer">v.2023.01</span> Made in the ATL
        </p>
      </div>
    </footer>
  );
}
