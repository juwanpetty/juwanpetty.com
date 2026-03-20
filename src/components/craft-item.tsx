import type { Craft } from "content-collections";
import Image from "next/image";
import Link from "next/link";

type CraftItemProps = {
  craft: Craft;
};

export function CraftItem({ craft }: CraftItemProps) {
  const { title } = craft;
  const path = craft._meta.path;
  const fileSrc = `/crafts/${path}.png`;

  return (
    <div className="border-border bg-muted relative aspect-[4/3] rounded-2xl border p-0.5 pb-0">
      <div className="bg-background relative h-full w-full rounded-xl">
        <Image
          src={fileSrc}
          alt={title}
          width={800}
          height={600}
          className="rounded-xl border border-black/10 object-cover dark:border-white/10"
        />
      </div>

      <div className="flex items-center justify-between px-3 py-2.5">
        <h3 className="text-foreground text-base font-medium tracking-tight">
          <Link href={`/crafts/${path}`}>
            {title}
            <span className="absolute inset-0" />
          </Link>
        </h3>
      </div>
    </div>
  );
}
