import { Work } from "content-collections";
import Image from "next/image";
import { IconArrowUpRightOutline18 } from "nucleo-ui-outline-18";

type WorksItemProps = {
  work: Work;
};

export function WorksItem({ work }: WorksItemProps) {
  const {
    title,
    image,
    previewUrl,
    _meta: { path },
  } = work;

  const isVideo = image.src.endsWith(".mp4");

  const file = isVideo ? (
    <video
      width={image.width}
      height={image.height}
      muted
      autoPlay
      loop
      preload="none"
      playsInline
      webkit-playsinline="true"
      className="rounded-xl"
    >
      <source src={image.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      alt={title}
      className="rounded-xl"
    />
  );

  const content = (
    <>
      <div className="relative isolate rounded-xl">
        {file}
        <div className="pointer-events-none absolute inset-0 rounded-xl inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />

        {previewUrl && (
          <span className="absolute bottom-2.5 left-2.5 flex h-7 items-center gap-1 rounded-lg bg-[#333] px-2.5 text-sm font-medium text-white opacity-100 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 group-focus:opacity-100 sm:opacity-0">
            Live Preview
            <IconArrowUpRightOutline18 className="size-4 text-white" />
          </span>
        )}
      </div>
    </>
  );

  return (
    <div key={path} className="mb-4 flex break-inside-avoid flex-col gap-3">
      {previewUrl ? (
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 rounded-xl"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
