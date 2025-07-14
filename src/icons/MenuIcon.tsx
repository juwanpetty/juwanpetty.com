import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function MenuIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <line x1="1.75" y1="5.75" x2="16.25" y2="5.75"></line>
        <line x1="1.75" y1="12.25" x2="16.25" y2="12.25"></line>
      </g>
    </svg>
  );
}
