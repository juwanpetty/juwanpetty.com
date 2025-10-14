import Link from "next/link";
import Image from "next/image";

type ResourceCardProps = {
  title: string;
  subtitle: string;
  slug: string;
  thumbnail: string;
};

export function ResourceCard({
  title,
  subtitle,
  slug,
  thumbnail,
}: ResourceCardProps) {
  return (
    <div>
      <Link href={slug}>
        <div className="flex h-55 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-neutral-200">
          <Image
            src={thumbnail}
            width={1050}
            height={660}
            alt={`Picture of ${title}`}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="flex w-full flex-col items-start justify-center gap-0.5 py-2 text-base leading-relaxed">
        <Link href={slug} className="font-medium">
          {title}
        </Link>
        <span className="text-neutral-500">{subtitle}</span>
      </div>
    </div>
  );
}
