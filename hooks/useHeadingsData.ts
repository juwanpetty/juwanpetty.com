'use client';

import { useEffect, useState } from "react";

import { getNestedHeadings } from "../utilities/getNestedHeadings";

interface NestedHeading {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

export function useHeadingsData() {
  const [nestedHeadings, setNestedHeadings] = useState<NestedHeading[]>([]);

  useEffect(() => {
    const pageElement = document.querySelector("#page");

    const headingElements = Array.from(
      (pageElement as HTMLElement).querySelectorAll("h2, h3") || []
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};