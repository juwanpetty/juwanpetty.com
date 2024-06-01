import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";

type Props = {
  items: { label: string; href: string }[];
};

export function Breadcrumbs({ items }: Props) {
  function isLastItem(index: number) {
    return index === items.length - 1;
  }

  function renderText(item: { label: string; href: string }, index: number) {
    return isLastItem(index) ? (
      <span className="text-stone-800" aria-disabled>
        {item.label}
      </span>
    ) : (
      <Link
        href={item.href}
        className="text-stone-500 transition-colors hover:text-stone-800"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-[2px] text-sm text-stone-500">
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {renderText(item, index)}
          {index < items.length - 1 && (
            <span className="text-stone-300">
              <Icons.Slash size={16} />
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
