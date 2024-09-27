import Link from "next/link";
import React from "react";

type BreadcrumbItem = {
  name: string;
  href: string;
  icon?: JSX.Element;
};

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items = [{ name: "Home", href: "/" }] }: Props) {
  function isLastItem(index: number) {
    return index === items.length - 1;
  }

  return (
    <div className="flex items-center gap-2 text-sm font-[450]">
      {items.map((item, index) =>
        isLastItem(index) ? (
          <span
            key={`breadcrumb-${item.href}`}
            className="flex items-center gap-1.5"
          >
            {item.icon && item.icon}
            {item.name}
          </span>
        ) : (
          <>
            <Link
              href={item.href}
              key={`breadcrumb-${item.href}`}
              className="text-neutral-500"
            >
              <span>{item.name}</span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="size-3 text-neutral-300"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path d="M7.5 2.75L11.75 9L7.5 15.25" />
              </g>
            </svg>
          </>
        )
      )}
    </div>
  );
}
