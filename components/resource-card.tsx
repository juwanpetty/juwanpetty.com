import Link from "next/link";
import Image from "next/image";

type ResourceCardProps = {
  title: string;
  subtitle: string;
  href: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  };
};

export function ResourceCard({
  title,
  subtitle,
  href,
  image,
}: ResourceCardProps) {
  return (
    <div>
      <a href={href} target="_blank" rel="noreferrer noopener">
        <div className="flex h-55 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-neutral-200">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt || `Picture of ${title}`}
            className="h-full w-full object-cover"
          />
        </div>
      </a>

      <div className="flex w-full flex-col items-start justify-center gap-0.5 py-2 text-base leading-relaxed">
        <Link href={href} className="font-medium">
          {title}
        </Link>
        <span className="text-neutral-500">{subtitle}</span>
      </div>
    </div>
  );
}
