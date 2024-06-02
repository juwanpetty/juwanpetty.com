import React from "react";
import Link from "next/link";
import { cn } from "@/utilities/mergeClassNames";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  activeId: string;
  children: React.ReactNode;
};

export function TableOfContentsItem({ id, activeId, children }: Props) {
  const router = useRouter();
  const pathWithId = `#${id}`;

  return (
    <Link
      href={pathWithId}
      className={cn("block py-1 pl-3 text-[13px] leading-4 text-stone-500", {
        "font-medium text-stone-800": id === activeId,
      })}
      onClick={() => {
        router.push(pathWithId);
        document
          ?.querySelector(pathWithId)
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Link>
  );
}
