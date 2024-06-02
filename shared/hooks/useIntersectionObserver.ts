import { useEffect, useRef } from "react";

// height of my sticky nav at the top, 
// so I don't want any content hidden under there to count as "visible"
const TOP_BOUNDARY = 110;

// if a header is in the bottom 40% of the page, this doesn’t count as being "visible"
const BOTTOM_BOUNDARY = 40;

type HeadingMap = {
  [key: string]: IntersectionObserverEntry;
};

export const useIntersectionObserver = (setActiveId:
  (id: string) => void
) => {
  const headingElementsRef = useRef<HeadingMap>({});

  useEffect(() => {
    const pageElement = document.querySelector("#page");
    const headingElements = Array.from((pageElement as HTMLElement).querySelectorAll("h2, h3"));

    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce<HeadingMap>((map, headingElement) =>
        ({ ...map, [headingElement.target.id]: headingElement }), {});

      const visibleHeadings: IntersectionObserverEntry[] = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);


      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort((a, b) => {
          const indexA = getIndexFromId(a.target.id);
          const indexB = getIndexFromId(b.target.id);

          if (indexA < indexB) return -1;
          if (indexA > indexB) return 1;
          return 0;
        });
        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: `-${TOP_BOUNDARY}px 0px -${BOTTOM_BOUNDARY}% 0px`,
    });

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};