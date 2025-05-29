import { Icons } from "@/components/icons";
import { formatDate } from "@/utilities/format-date";
import { Link } from "next-view-transitions";

interface BlogHeaderProps {
  title: string;
  datePublished: string;
}

export function BlogHeader({ title, datePublished }: BlogHeaderProps) {
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <header className="my-[10px] flex flex-col gap-3 md:my-5">
      <Link href="/" className="flex items-center gap-1">
        <Icons icon="arrowLeft" className="size-4 text-neutral-500" />
        <span className="text-sm font-medium tracking-[-0.1px] text-neutral-700">
          Back to Home
        </span>
      </Link>
      <h1 className="text-2xl leading-8 font-semibold tracking-[-0.3px]">
        {title}
      </h1>
      <div className="flex items-center justify-between text-sm">
        <time
          dateTime={formattedDate}
          className="text-sm font-medium tracking-[-0.1px] text-neutral-700"
        >
          {formattedDate}
        </time>
      </div>
    </header>
  );
}
