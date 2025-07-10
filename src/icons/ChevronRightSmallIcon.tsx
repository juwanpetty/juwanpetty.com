import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function ChevronRightSmallIcon({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={cn("size-3 shrink-0", className)}
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <polyline points="4.25 10.25 8.5 6 4.25 1.75"></polyline>
      </g>
    </svg>
  );
}
