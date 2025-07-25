import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function ChevronExpandYIcon({
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <polyline points="12.5 6.25 9 2.75 5.5 6.25" />
        <polyline points="12.5 11.75 9 15.25 5.5 11.75" />
      </g>
    </svg>
  );
}
