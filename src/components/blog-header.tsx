import { formatDate } from "@/utilities/format-date";

interface BlogHeaderProps {
  title: string;
  datePublished: string;
}

export function BlogHeader({ title, datePublished }: BlogHeaderProps) {
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <header className="space-y-0.5">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-balance">
        {title}
      </h1>

      <div className="flex items-center gap-2">
        <time dateTime={formattedDate} className="text-sm text-neutral-500">
          {formattedDate}
        </time>
      </div>
    </header>
  );
}
