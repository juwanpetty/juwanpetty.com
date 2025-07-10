import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function EnvelopeIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733"></path>
        <rect
          x="1.75"
          y="3.25"
          width="14.5"
          height="11.5"
          rx="2"
          ry="2"
          transform="translate(18 18) rotate(180)"
        ></rect>
      </g>
    </svg>
  );
}
