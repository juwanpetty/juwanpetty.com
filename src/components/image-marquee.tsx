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
          <div className="relative rounded-lg">
            {work.image.src.endsWith(".mp4") ? (
              <video
                width={work.image.width}
                height={work.image.height}
                muted
                autoPlay
                loop
                preload="none"
                playsInline
                webkit-playsinline="true"
                className="h-50 w-auto rounded-lg object-cover"
              >
                <source src={work.image.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={work.image.src}
                width={work.image.width}
                height={work.image.height}
                alt={work.title}
                className="h-50 w-auto rounded-lg object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10" />
          </div>
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
