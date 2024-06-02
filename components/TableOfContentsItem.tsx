import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/utilities/mergeClassNames";

type Props = {
  id: string;
  activeId: string;
  children: React.ReactNode;
};

export function TableOfContentsItem({ id, activeId, children }: Props) {
  const pathName = usePathname();
  const router = useRouter();

  const pathWithId = `${pathName}#${id}`;

  return (
    <Link
      href={pathWithId}
      className={cn("block py-1 pl-3 text-[13px] leading-4 text-stone-500", {
        "font-medium text-stone-800": id === activeId,
      })}
      onClick={(e) => {
        e.preventDefault();

        router.push(pathWithId);

        document
          ?.querySelector(`#${id}`)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
