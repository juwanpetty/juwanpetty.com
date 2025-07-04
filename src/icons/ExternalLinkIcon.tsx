import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function ExternalLinkIcon({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={cn("size-5 shrink-0", className)}
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M5.25 5.25h7.5v7.5" />
        <path d="M5.25 12.75L12.75 5.25" />
      </g>
    </svg>
  );
}
