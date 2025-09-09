import { ComponentProps } from "react";

export function ArrowLeftIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <line x1="2.75" y1="9" x2="15.25" y2="9" />
        <polyline points="7 13.25 2.75 9 7 4.75" />
      </g>
    </svg>
  );
}
