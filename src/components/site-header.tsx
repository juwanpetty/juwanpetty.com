// import { blogPath, workPath } from "@/paths";
// import { Link } from "next-view-transitions";

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center px-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end">
        {/* <nav className="space-x-4 text-sm font-medium text-neutral-700">
          <Link href={workPath()}>Works</Link>
          <Link href={blogPath()}>Journal</Link>
        </nav> */}
      </div>
    </header>
  );
}
