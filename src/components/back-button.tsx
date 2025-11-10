import { ArrowLeftIcon, ArrowUpLeftIcon } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

type BackButtonProps = PropsWithChildren & {
  href: string;
};

export function BackButton({ href, children }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-x-2 text-base font-medium"
    >
      <ArrowUpLeftIcon className="size-4 text-neutral-500" />
      <span className="underline decoration-neutral-300 underline-offset-3 transition-colors hover:decoration-neutral-700">
        {children}
      </span>
    </Link>
  );
}
