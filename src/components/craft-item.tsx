import { Craft } from "@/data/crafts";

type CraftItemProps = {
  craft: Craft;
};

export function CraftItem({ craft }: CraftItemProps) {
  const { id } = craft;

  const fileSrc = `/crafts/${craft.id}.mp4`;

  return (
    <div className="border-border bg-muted flex flex-col rounded-xl border p-2 pt-0">
      <div className="flex h-11 w-full items-center justify-between px-2 pr-0 font-mono text-sm">
        <span className="text-muted-foreground font-medium">{id}</span>
      </div>

      <video
        playsInline
        autoPlay
        muted
        loop
        className="border-border rounded-md border"
      >
        <source src={fileSrc} type="video/mp4" />
      </video>
    </div>
  );
}
