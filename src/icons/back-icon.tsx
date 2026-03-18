import { ComponentProps } from "react";

export function BackIcon({ ...props }: ComponentProps<"svg">) {
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
        <path d="M2.25,6.25H12c2.071,0,3.75,1.679,3.75,3.75h0c0,2.071-1.679,3.75-3.75,3.75h-3.75" />
        <polyline points="5.75 9.75 2.25 6.25 5.75 2.75" />
      </g>
    </svg>
  );
}
