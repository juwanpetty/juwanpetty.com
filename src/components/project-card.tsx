import { cn } from "@/utilities/merge-classnames";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export function ProjectCard({
  title,
  description,
  href,
  images,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className={cn("grid grid-cols-3 grid-rows-1 gap-3", {
          "grid-cols-1": images.length === 1,
          "grid-cols-2": images.length === 2,
        })}
      >
        {images.map((image) => (
          <a
            key={image.src}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="aspect-square w-full rounded-lg border border-neutral-200 bg-neutral-50"
            />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-start gap-1 pl-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium tracking-[-0.2px]"
        >
          {title}
        </a>
        <p className="text-base tracking-[-0.2px] text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
}
