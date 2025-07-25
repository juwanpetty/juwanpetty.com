import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function CopyIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <path d="M2.25 6.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H11.75"></path>{" "}
        <path d="M7.25 12.25H13.75C14.8546 12.25 15.75 11.355 15.75 10.25V4.75C15.75 3.645 14.8546 2.75 13.75 2.75H7.25C6.1454 2.75 5.25 3.645 5.25 4.75V10.25C5.25 11.355 6.1454 12.25 7.25 12.25Z"></path>
      </g>
    </svg>
  );
}
