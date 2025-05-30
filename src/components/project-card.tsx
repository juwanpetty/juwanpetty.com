import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { Link } from "next-view-transitions";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

export function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <Link href={href} className="flex flex-col gap-3">
      <ImagePlaceholder className="aspect-video" />
      <div className="flex w-full items-start gap-4 px-1">
        <div className="grow">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-sm text-neutral-500">{description}</p>
        </div>

        <Icons icon="arrowUpRight" className="size-4 text-neutral-500" />
      </div>
    </Link>
  );
}
