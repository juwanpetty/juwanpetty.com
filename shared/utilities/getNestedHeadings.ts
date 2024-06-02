import type { NestedHeading } from "@/components/TableOfContents";


export function getNestedHeadings(headingElements: Element[]) {
  const nestedHeadings: NestedHeading[] = [];

  headingElements.forEach((heading) => {
    const { textContent: title, id } = heading;

    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id: id!, title: title!, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id: id!,
        title: title!,
      });
    }
  });

  return nestedHeadings;
};