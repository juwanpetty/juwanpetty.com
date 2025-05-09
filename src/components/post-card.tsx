import { ImagePlaceholder } from "@/components/image-placeholder";
import { PostMetadata } from "@/utilities/get-mdx-data";
import { format } from "date-fns";
import { Link } from "next-view-transitions";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  post: PostMetadata;
  className?: string;
};

export function PostCard({ post, className }: Props) {
  const { title, datePublished, slug } = post;
  const formattedDate = format(new Date(datePublished), "MMMM dd, yyyy");

  return (
    <div className={cn("grid grid-cols-1 gap-2.5 lg:gap-5", className)}>
      <Link href={`/blog/${slug}`}>
        <ImagePlaceholder className="aspect-video" />
      </Link>

      <div className="flex flex-col">
        <Link
          href={`/blog/${slug}`}
          className="mb-2.5 text-lg font-medium text-balance"
        >
          {title}
        </Link>
        <Link
          href={`/blog/${slug}`}
          className="mb-2 text-sm font-medium text-neutral-500"
        >
          {formattedDate}
        </Link>
      </div>
    </div>
  );
}
