import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function MenuLeftIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <line x1="2.25" y1="14.25" x2="15.75" y2="14.25" />
        <line x1="2.25" y1="3.75" x2="15.75" y2="3.75" />
        <line x1="2.25" y1="9" x2="9.25" y2="9" />
      </g>
    </svg>
  );
}
