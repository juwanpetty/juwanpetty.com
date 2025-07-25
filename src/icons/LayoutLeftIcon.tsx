import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function LayoutLeftIcon({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={cn("h-5 shrink-0", className)}
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <rect x="1.75" y="2.75" width="14.5" height="12.5" rx="2" ry="2"></rect>
        <line x1="4.75" y1="5.75" x2="4.75" y2="12.25"></line>
      </g>
    </svg>
  );
}
