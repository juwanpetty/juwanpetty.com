import { Work } from "content-collections";
import Image from "next/image";
import { IconShareUpRightOutline18 } from "nucleo-ui-outline-18";

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
      className="dark:bg-gray-2 border-black-a2 dark:border-white-a2 rounded-xl border"
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
      className="dark:bg-gray-2 border-black-a2 dark:border-white-a2 rounded-xl border"
    />
  );

  const content = (
    <>
      {file}

      <div className="text-gray-12 flex items-center gap-x-2 px-1 font-medium">
        <h3 className="flex-1">{title}</h3>

        {previewUrl && (
          <div className="text-gray-9 flex size-6 items-center justify-center rounded-md [&_svg]:size-4">
            <IconShareUpRightOutline18 />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div
      key={path}
      className="mb-8 flex break-inside-avoid flex-col gap-3 sm:mb-8"
    >
      {previewUrl ? (
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-3 rounded-xl"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
