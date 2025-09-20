import { ComponentProps } from "react";

export function ArrowRightIcon({ ...props }: ComponentProps<"svg">) {
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
        <line x1="15.25" y1="9" x2="2.75" y2="9"></line>
        <polyline points="11 4.75 15.25 9 11 13.25"></polyline>
      </g>
    </svg>
  );
}
