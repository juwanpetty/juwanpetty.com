import { blogPath } from "@/lib/paths";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

type BlogItemProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export function BlogItem({ title, description, date, slug }: BlogItemProps) {
  const href = blogPath(slug);

  return (
    <div className="flex items-center gap-x-4">
      <Link href={href} className="shrink-0">
        <div className="flex aspect-3/4 h-14 items-center justify-center overflow-hidden rounded-md bg-white shadow-xs ring-1 ring-neutral-200">
          <FileTextIcon className="size-4.5 text-neutral-400" />
        </div>
      </Link>

      <div className="flex min-w-0 flex-col gap-y-1 text-base">
        <Link href={href} className="inline-block truncate font-medium">
          {title}
        </Link>
        <p className="line-clamp-1 min-h-[1lh] leading-relaxed text-neutral-500">
          {date} · {description}
        </p>
      </div>
    </div>
  );
}
