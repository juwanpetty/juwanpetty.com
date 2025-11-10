import { formatDate } from "@/lib/utils";
import Link from "next/link";

type BlogItemProps = {
  title: string;
  date: string;
  slug: string;
};

export function BlogItem({ title, date, slug }: BlogItemProps) {
  const formattedDate = formatDate(date, "MMM dd");

  return (
    <Link href={slug} className="flex items-center gap-4">
      <span className="truncate text-base font-medium underline-offset-3 hover:underline">
        {title}
      </span>

      <span className="flex flex-1 shrink border-t border-dashed border-neutral-200" />

      <span className="font-mono text-base text-nowrap text-neutral-500 tabular-nums">
        {formattedDate}
      </span>
    </Link>
  );
}
