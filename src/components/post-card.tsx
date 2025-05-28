import { Icons } from "@/components/icons";
import { formatDate } from "@/utilities/format-date";
import { Link } from "next-view-transitions";

interface PostCardProps {
  title: string;
  datePublished: string;
  slug: string;
}

export function PostCard({ title, datePublished, slug }: PostCardProps) {
  const formattedDate = formatDate(datePublished, "MMM d, yyyy");

  return (
    <Link href={`/blog/${slug}`} className="flex items-center gap-4">
      <div className="flex aspect-square size-12 items-center justify-center rounded-lg border border-[#D9D9D9] bg-[#F0F0F0]">
        <Icons icon="blog" className="size-5 text-[#616161]" />
      </div>

      <div className="flex flex-col">
        <h3 className="truncate text-base font-medium tracking-[-0.2px]">
          {title}
        </h3>
        <p className="text-sm font-medium tracking-[-0.1px] text-neutral-500">
          {formattedDate}
        </p>
      </div>
    </Link>
  );
}
