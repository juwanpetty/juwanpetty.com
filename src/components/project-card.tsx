import { Icons } from "@/components/icons";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  href,
  image,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-3"
    >
      <Image
        src={image}
        alt={`${title} Screenshot`}
        width={1920}
        height={1080}
        className="aspect-video rounded-lg border border-neutral-200 shadow-2xs"
      />

      <div className="flex w-full items-start gap-4 px-1">
        <div className="grow">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>

        <Icons icon="arrowUpRight" className="size-4 text-neutral-500" />
      </div>
    </a>
  );
}
