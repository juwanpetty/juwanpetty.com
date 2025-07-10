import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function CodeIcon({ className, ...props }: ComponentProps<"svg">) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <polyline points="6.5 13.75 1.75 9 6.5 4.25"></polyline>
        <polyline points="11.5 13.75 16.25 9 11.5 4.25"></polyline>
      </g>
    </svg>
  );
}
