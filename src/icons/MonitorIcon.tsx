import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function MonitorIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <path d="M5.75 15.75C6.508 15.511 7.628 15.25 9 15.25C9.795 15.25 10.941 15.338 12.25 15.75"></path>{" "}
        <path d="M9 12.75V15.25"></path>{" "}
        <path d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V10.75C1.75 11.8546 2.64543 12.75 3.75 12.75H14.25C15.3546 12.75 16.25 11.8546 16.25 10.75V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"></path>
      </g>
    </svg>
  );
}
