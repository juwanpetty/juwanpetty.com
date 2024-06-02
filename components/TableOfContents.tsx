"use client";

import React, { useState } from "react";
import { useHeadingsData } from "@/hooks/useHeadingsData";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { TableOfContentsItem } from "@/components/TableOfContentsItem";

export interface NestedHeading {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

export type HeadingsProps = {
  headings: NestedHeading[];
  activeId: string;
};

function Headings({ headings, activeId }: HeadingsProps) {
  return (
    <ul className="relative flex flex-col gap-1 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
      {headings.map((heading) => (
        <li key={heading.id}>
          <TableOfContentsItem id={heading.id} activeId={activeId}>
            {heading.title}
          </TableOfContentsItem>
          {heading.items.length > 0 && (
            <ul className="relative flex flex-col gap-1 pl-4 before:absolute before:top-0 before:h-full before:border-l before:border-solid before:border-stone-200">
              {heading.items.map((child) => (
                <li key={child.id}>
                  <TableOfContentsItem id={child.id} activeId={activeId}>
                    {child.title}
                  </TableOfContentsItem>
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
