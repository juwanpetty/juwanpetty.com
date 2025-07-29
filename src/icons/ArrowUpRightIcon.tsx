import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function ArrowUpRightIcon({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-5 shrink-0", className)}
      {...props}
    >
      <path
        d="M5.83334 14.1667L14.1667 5.83337"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83334 5.83337H14.1667V14.1667"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
