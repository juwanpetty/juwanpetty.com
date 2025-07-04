import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function GlobeIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <ellipse cx="9" cy="9" rx="3" ry="7.25" />
        <line x1="1.75" y1="9" x2="16.25" y2="9" />
        <circle cx="9" cy="9" r="7.25" />
      </g>
    </svg>
  );
}
