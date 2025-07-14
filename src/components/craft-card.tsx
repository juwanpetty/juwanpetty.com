import { Link } from "next-view-transitions";
import { url } from "@/lib/url";

interface CraftCardProps {
  slug: string;
  title: string;
  video: string;
}

export function CraftCard({ slug, title, video }: CraftCardProps) {
  return (
    <Link href={url.craftDetail(slug)}>
      <div className="aspect-video w-full overflow-hidden rounded-lg border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-neutral-950">
        <video
          width="1920"
          height="1080"
          autoPlay
          loop
          playsInline
          muted
          preload="none"
        >
          <source src={`/media/${video}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h3 className="mt-2 text-base font-medium text-neutral-950 dark:text-white">
        {title}
      </h3>
    </Link>
  );
}
