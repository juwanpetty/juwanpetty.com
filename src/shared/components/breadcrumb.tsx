import { Fragment } from "react";
import { cn } from "@/shared/utilities/merge-classnames";
import Link from "next/link";

export type BreadcrumbLink = {
  name: string;
  href: string;
};

type Props = {
  links?: BreadcrumbLink[];
};

export function Breadcrumb({ links }: Props) {
  function isLastItem(index: number, length: number) {
    return index === length - 1;
  }

  function isFirstItem(index: number) {
    return index === 0;
  }

  if (!links) {
    return null;
  }

  return (
    <div className="mb-6 flex items-center space-x-1.5 text-sm leading-none">
      {links.map((link, index) => (
        <Fragment key={link.name}>
          <Link
            href={link.href}
            className={cn("text-stone-900", {
              "text-stone-500": isFirstItem(index),
            })}
          >
            {link.name}
          </Link>
          {!isLastItem(index, links.length) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className="h-2.5 w-2.5 text-stone-500"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <polyline points="4.25 10.25 8.5 6 4.25 1.75" />
              </g>
            </svg>
          )}
        </Fragment>
      ))}
    </div>
  );
}
