import { Fragment } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  items: { label: string; href: string }[];
};

export function Breadcrumbs({ items }: Props) {
  function isLastItem(index: number) {
    return index === items.length - 1;
  }

  function renderText(item: { label: string; href: string }, index: number) {
    return isLastItem(index) ? (
      <span
        className="block h-6 content-center truncate rounded-lg border border-sand-6 px-2 text-sand-12"
        aria-disabled
      >
        {item.label}
      </span>
    ) : (
      <Link
        href={item.href}
        className="block h-6 content-center rounded-lg bg-sand-3 px-2 text-sand-11 transition-colors hover:text-sand-12"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex h-[var(--header-height)] w-full min-w-0 items-center gap-1 text-sm font-medium">
      {items.map((item, index) => (
        <Fragment key={item.href}>
          <div
            className={cn("h-6", {
              "min-w-0": isLastItem(index),
            })}
          >
            {renderText(item, index)}
          </div>
          {!isLastItem(index) && (
            <span className="min-w-4 text-sand-6">
              <Icon icon="radix-icons:slash" className="size-4" />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
