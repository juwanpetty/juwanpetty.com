import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/dates";
import type { Craft } from "content-collections";
import Link from "next/link";

type CraftsItemProps = {
  craft: Craft;
};

export function CraftsItem({ craft }: CraftsItemProps) {
  const { title, published } = craft;
  const path = craft._meta.path;

  const formattedDate = formatDate(
    published.toDateString(),
    SHORTHAND_DATE_FORMAT
  );

  return (
    <div className="flex flex-col gap-y-3">
      <Link href={`/work/${path}`}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={`/assets/images/crafts/${path}.png`}
          src={`/assets/videos/crafts/${path}.mp4`}
          className="bg-gray-1 dark:bg-gray-2 border-black-a2 dark:border-white-a2 aspect-4/3 w-full rounded-xl border shadow-xs dark:shadow-none"
        />
      </Link>

      <div className="flex flex-col gap-y-1 text-base">
        <Link href={`/work/${path}`}>
          <div className="text-gray-12 flex items-center gap-x-2 font-medium">
            <h3 className="flex-1">{title}</h3>
          </div>
        </Link>

        <div className="text-gray-11 text-sm">
          <Link href={`/work/${path}`}>
            <p>{formattedDate}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
