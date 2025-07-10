import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function CircleUserIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <circle cx="9" cy="7.75" r="2"></circle>
        <path d="M5.154,15.147c.479-1.673,2.019-2.897,3.846-2.897s3.367,1.224,3.846,2.897"></path>
        <circle cx="9" cy="9" r="7.25"></circle>
      </g>
    </svg>
  );
}
