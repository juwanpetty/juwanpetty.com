import type { Component } from "content-collections";
import Link from "next/link";
import { IconShapeCircleOutline18 } from "nucleo-ui-outline-18";

type ComponentsItemProps = {
  component: Component;
};

export function ComponentsItem({ component }: ComponentsItemProps) {
  const { title, description, draft } = component;
  const path = component._meta.path;

  const isDraft = Boolean(draft);
  const descriptionText = isDraft ? "Coming Soon" : description;

  const itemContent = (
    <>
      {/* <div className="bg-gray-1 dark:bg-gray-2 flex size-12.5 shrink-0 items-center justify-center rounded-md border border-black/10 dark:border-white/10">
        <IconShapeCircleOutline18 className="text-gray-11 size-6" />
      </div> */}

      {/*<div className="flex flex-col gap-y-0.5"> */}
      <div className="flex flex-col">
        <h3 className="text-gray-12 text-base font-medium">{title}</h3>
        <p className="text-gray-11 text-sm">{descriptionText}</p>
        {/*<p className="text-gray-11 text-base">{description}</p>*/}
      </div>
    </>
  );

  if (isDraft) {
    return (
      <div className="flex cursor-default items-center gap-x-3 rounded-lg p-1 opacity-50">
        {itemContent}
      </div>
    );
  }

  return (
    <Link
      href={`/components/${path}`}
      className="hover:bg-gray-2 flex items-center gap-x-3 rounded-lg p-1 transition-colors"
    >
      {itemContent}
    </Link>
  );
}
