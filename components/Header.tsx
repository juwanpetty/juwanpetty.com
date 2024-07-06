import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 top-0 flex h-[var(--header-height)] w-full items-center gap-6 px-4 md:px-8">
      <Link href="/">
        <div className="size-8 rounded-full bg-sand-12" />
        <span className="sr-only">Home</span>
      </Link>

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          {
            label: "React Hook Getter Pattern",
            href: "#",
          },
        ]}
      />
    </header>
  );
}
