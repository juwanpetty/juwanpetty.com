import { CSSProperties } from "react";
import { getSortedWorks } from "@/lib/content";
import Image from "next/image";

export function ImageMarquee() {
  const works = getSortedWorks().slice(0, 5); // Limit to 5 images for the marquee

  const carouselMarkup = (
    <ul
      aria-hidden="true"
      className="flex min-w-full shrink-0 justify-around gap-[var(--gap)]"
      style={{ animation: "marquee 20s linear infinite" }}
    >
      {works.map((work) => (
        <li key={work._meta.path}>
          <Image
            src={work.image.src}
            width={work.image.width}
            height={work.image.height}
            alt={work.title}
            className="h-50 w-auto rounded-lg object-cover"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      style={
        {
          "--gap": "1rem",
        } as CSSProperties
      }
      className="flex w-full gap-[var(--gap)] overflow-hidden will-change-transform select-none"
    >
      {carouselMarkup}
      {carouselMarkup}
    </div>
  );
}
