import { homePath } from "@/lib/paths";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href={homePath()}
      className="mb-24 inline-flex items-center gap-x-2 text-sm font-medium"
    >
      <ArrowLeftIcon className="size-4 text-neutral-500" />
      <span className="text-neutral-700 underline decoration-neutral-200 underline-offset-3 transition-colors hover:decoration-neutral-700">
        Back
      </span>
    </Link>
  );
}
