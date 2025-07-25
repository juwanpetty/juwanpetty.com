import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function AppStackIcon({ className, ...props }: ComponentProps<"svg">) {
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
        <path d="M5.314,14.25h-1.564c-1.105,0-2-.895-2-2V5.75c0-1.105,.895-2,2-2h1.564"></path>
        <path d="M12.686,14.25h1.564c1.105,0,2-.895,2-2V5.75c0-1.105-.895-2-2-2h-1.564"></path>
        <rect
          x="5.25"
          y="2.25"
          width="7.5"
          height="13.5"
          rx="2"
          ry="2"
          transform="translate(18 18) rotate(180)"
        ></rect>
      </g>
    </svg>
  );
}
