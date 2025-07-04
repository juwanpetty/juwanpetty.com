import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function BlogIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <line x1="5.75" y1="11.25" x2="9" y2="11.25"></line>
        <line x1="5.75" y1="8.25" x2="12.25" y2="8.25"></line>
        <line x1="5.75" y1="5.25" x2="12.25" y2="5.25"></line>
        <rect x="2.75" y="1.75" width="12.5" height="14.5" rx="2" ry="2"></rect>
      </g>
    </svg>
  );
}
