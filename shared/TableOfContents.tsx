"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useHeadingsData } from "../hooks/useHeadingsData";
import type { NestedHeading } from "../lib/types";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { cn } from "../utilities/mergeClassNames";

type HeadingsProps = {
  headings: NestedHeading[];
  activeId: string;
};

function Headings({ headings, activeId }: HeadingsProps) {
  const pathName = usePathname();

  return (
    <ul className="relative flex flex-col gap-1 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
      {headings.map((heading) => (
        <li key={heading.id}>
          <Link
            href={`${pathName}#${heading.id}`}
            className={cn(
              "block py-1 pl-3 text-[13px] leading-4 text-stone-500",
              { "font-medium text-stone-800": heading.id === activeId }
            )}
            onClick={(e) => {
              e.preventDefault();

              document
                ?.querySelector(`#${heading.id}`)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {heading.title}
          </Link>
          {heading.items.length > 0 && (
            <ul className="relative flex flex-col gap-1 pl-4 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
              {heading.items.map((child) => (
                <li key={child.id}>
                  <Link
                    href={`#${child.id}`}
                    className={cn(
                      "block py-1 pl-3 text-[13px] leading-4 text-stone-500",
                      { "font-medium text-stone-800": child.id === activeId }
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document?.querySelector(`#${child.id}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {child.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

type Props = {
  label: string;
};

export function TableOfContents({ label }: Props) {
  const [activeId, setActiveId] = useState("");
  const { nestedHeadings } = useHeadingsData();

  useIntersectionObserver(setActiveId);

  const hasHeadings = nestedHeadings.length > 0;

  const placeholderHeadingsMarkup = (
    <div>
      <span className="mb-4 block text-sm text-stone-500">{label}</span>
      <div className="relative flex flex-col gap-1 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
        <span className="block py-1 pl-3 text-[13px] font-medium leading-4 text-stone-800">
          Intro
        </span>
        <span className="block py-1 pl-3 text-[13px] leading-4 text-stone-500">
          Featured Work
        </span>
        <span className="block py-1 pl-3 text-[13px] leading-4 text-stone-500">
          Consulting Services
        </span>
        <span className="block py-1 pl-3 text-[13px] leading-4 text-stone-500">
          Personal Projects
        </span>
        <span className="block py-1 pl-3 text-[13px] leading-4 text-stone-500">
          Writing
        </span>
        <span className="block py-1 pl-3 text-[13px] leading-4 text-stone-500">
          Contact
        </span>
      </div>
    </div>
  );

  return hasHeadings ? (
    <nav aria-label={label}>
      <span className="mb-4 block text-sm text-stone-500">{label}</span>
      <div className="relative flex flex-col gap-1 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
        <Headings headings={nestedHeadings} activeId={activeId} />
      </div>
    </nav>
  ) : (
    placeholderHeadingsMarkup
  );
}
