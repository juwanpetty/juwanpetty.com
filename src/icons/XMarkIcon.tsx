import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function XMarkIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <line x1="14" y1="4" x2="4" y2="14"></line>
        <line x1="4" y1="4" x2="14" y2="14"></line>
      </g>
    </svg>
  );
}
