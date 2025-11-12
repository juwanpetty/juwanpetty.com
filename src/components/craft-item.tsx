import { Craft } from "@/data/crafts";
import { formatDate } from "@/lib/utils";

type CraftItemProps = {
  craft: Craft;
};

export function CraftItem({ craft }: CraftItemProps) {
  const { title, date } = craft;

  const fileSrc = `/crafts/${craft.id}.mp4`;
  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-col gap-3">
      <video
        playsInline
        autoPlay
        muted
        loop
        className="rounded-md border border-neutral-200"
      >
        <source src={fileSrc} type="video/mp4" />
      </video>

      <div className="flex w-full flex-col px-1">
        <span className="text-secondary-foreground font-medium">{title}</span>
        <span className="text-muted-foreground">{formattedDate}</span>
      </div>
    </div>
  );
}
