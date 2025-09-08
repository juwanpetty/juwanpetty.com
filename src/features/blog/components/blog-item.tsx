import { Link } from "next-view-transitions";

type BlogItemProps = {
  title: string;
  date: string;
  href: string;
};

export function BlogItem({ title, date, href }: BlogItemProps) {
  return (
    <Link href={href} className="flex h-10 items-center gap-2 text-base">
      <h4 className="truncate text-neutral-700">{title}</h4>
      <span className="min-w-4 flex-1 border-t border-dotted border-neutral-200" />
      <span className="shrink-0 text-sm text-neutral-500 tabular-nums">
        {date}
      </span>
    </Link>
  );
}
