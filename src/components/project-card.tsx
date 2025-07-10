import Image from "next/image";

export function ProjectCard({
  title,
  url,
  image,
}: {
  title: string;
  url: string;
  image: {
    src: string;
    alt: string;
  };
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="relative aspect-video rounded-md border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-neutral-950">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="mt-3 text-base font-medium text-neutral-900 dark:text-white">
        {title}
      </h2>
    </a>
  );
}
