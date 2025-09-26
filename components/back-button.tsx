import { Icon } from "@/components/icon";
import { homePath } from "@/lib/paths";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href={homePath()}
      className="mb-3 inline-flex items-center gap-x-2 text-sm font-medium"
    >
      <Icon name="arrow-left" className="size-4 text-neutral-500" />
      <span className="text-neutral-700 underline decoration-neutral-200 underline-offset-3 transition-colors hover:decoration-neutral-700">
        Back
      </span>
    </Link>
  );
}
