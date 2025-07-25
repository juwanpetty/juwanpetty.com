import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function HashtagIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <line x1="3.75" y1="6.25" x2="15.25" y2="6.25"></line>
        <line x1="2.75" y1="11.75" x2="14.25" y2="11.75"></line>
        <line x1="7.633" y1="2.75" x2="5.289" y2="15.25"></line>
        <line x1="12.711" y1="2.75" x2="10.367" y2="15.25"></line>
      </g>
    </svg>
  );
}
