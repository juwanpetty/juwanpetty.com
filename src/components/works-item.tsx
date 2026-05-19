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

  return (
    <div
      key={path}
      className="mb-8 flex break-inside-avoid flex-col gap-3 sm:mb-4"
    >
      <Image
        src={image}
        alt={title}
        className="dark:bg-gray-2 border-black-a2 dark:border-white-a2 rounded-xl border"
      />

      <div className="text-gray-12 flex items-center gap-x-2 px-1 font-medium">
        <h3 className="flex-1">{title}</h3>

        {previewUrl && (
          <div className="border-gray-4 dark:bg-gray-1 flex size-10 items-center justify-center rounded-full border bg-white">
            <IconShareUpRightOutline18 className="text-gray-12 size-4.5" />
          </div>
        )}
      </div>
    </div>
  );
}
