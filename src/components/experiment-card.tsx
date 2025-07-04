import Image from "next/image";
import { Link } from "next-view-transitions";
import { url } from "@/lib/url";

interface ExperimentCardProps {
  slug: string;
  title: string;
  image: {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  };
}

export function ExperimentCard({ slug, title, image }: ExperimentCardProps) {
  return (
    <Link href={url.experimentDetail(slug)}>
      <div className="aspect-4/3 w-full overflow-hidden rounded-lg border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-neutral-950">
        <Image
          src={image.src}
          alt={title}
          width={image.width}
          height={image.height}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-3 text-base font-medium text-neutral-950 dark:text-white">
        {title}
      </h3>
    </Link>
  );
}
