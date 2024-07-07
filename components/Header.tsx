import { Navigation } from "@/components/Navigation";
import Link from "next/link";

type Props = {
  pageTitle?: string;
};

export function Header({ pageTitle }: Props) {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-[var(--header-height)] w-full items-center gap-6 px-4 md:px-8">
      <Link href="/">
        <div className="size-8 rounded-full bg-sand-12" />
        <span className="sr-only">Home</span>
      </Link>

      <Navigation pageTitle={pageTitle} />
    </header>
  );
}
