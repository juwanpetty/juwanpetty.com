import { formatDate } from "@/utilities/format-date";

interface BlogHeaderProps {
  title: string;
  datePublished: string;
}

export function BlogHeader({ title, datePublished }: BlogHeaderProps) {
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <header className="space-y-2">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-balance">
        {title}
      </h1>

      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          <div className="flex h-5 items-center rounded-md border border-neutral-900/10 bg-neutral-100 px-0.75">
            <span className="px-0.75 text-xs font-medium text-neutral-500">
              Design
            </span>
          </div>
          <div className="flex h-5 items-center rounded-md border border-neutral-900/10 bg-neutral-100 px-0.75">
            <span className="px-0.75 text-xs font-medium text-neutral-500">
              UX
            </span>
          </div>
        </div>
        <span className="text-sm text-neutral-500">/</span>
        <time dateTime={formattedDate} className="text-sm text-neutral-500">
          {formattedDate}
        </time>
      </div>
    </header>
  );
}
