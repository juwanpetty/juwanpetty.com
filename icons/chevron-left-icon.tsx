import { ComponentProps } from "react";

export function ChevronLeftIcon({ ...props }: ComponentProps<"svg">) {
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
        strokeWidth="2"
        stroke="currentColor"
      >
        <polyline points="11.5 15.25 5.25 9 11.5 2.75"></polyline>
      </g>
    </svg>
  );
}
