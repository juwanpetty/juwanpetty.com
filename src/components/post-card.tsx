import { ImagePlaceholder } from "@/components/image-placeholder";
import { formatDate } from "@/utilities/format-date";
import { PostMetadata } from "@/utilities/get-mdx-data";
import { cn } from "@/utilities/merge-classnames";
import { Link } from "next-view-transitions";

type Props = {
  post: PostMetadata;
  className?: string;
};

export function PostCard({ post, className }: Props) {
  const { title, datePublished, slug } = post;
  const formattedDate = formatDate(datePublished, "MMM dd");

  return (
    <div className={cn("grid grid-cols-1 gap-2.5 lg:gap-5", className)}>
      <Link href={`/blog/${slug}`}>
        <ImagePlaceholder className="aspect-video" />
      </Link>

      <div className="flex flex-col">
        <Link
          href={`/blog/${slug}`}
          className="text-lg leading-6.5 font-medium tracking-[-0.2px] text-balance"
        >
          {title}
        </Link>
        <Link
          href={`/blog/${slug}`}
          className="my-2 text-sm font-medium text-neutral-500"
        >
          {formattedDate}
        </Link>
        <p className="text-sm tracking-[-0.1px] text-neutral-500">
          Design better and spend less time without restricting creative
          freedom.
        </p>
      </div>
    </div>
  );
}
