import { Icon } from "@/components/icon";
import { blogPath } from "@/paths";
import { Link } from "next-view-transitions";

type BlogItemProps = {
  title: string;
  description: string;
  slug: string;
};

export function BlogItem({ title, description, slug }: BlogItemProps) {
  const href = blogPath(slug);

  return (
    <div className="flex items-center gap-x-6">
      <Link href={href} className="shrink-0">
        <div className="flex aspect-3/4 h-21 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-neutral-200">
          <Icon name="post" className="size-5 text-neutral-500" />
        </div>
      </Link>

      <div className="flex min-w-0 flex-col text-base">
        <Link href={href} className="inline-block truncate font-medium">
          {title}
        </Link>
        <p className="line-clamp-2 min-h-[2lh] leading-relaxed text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
}
