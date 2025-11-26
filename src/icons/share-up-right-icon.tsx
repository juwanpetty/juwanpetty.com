import { ComponentProps } from "react";

export function ShareUpRightIcon({ ...props }: ComponentProps<"svg">) {
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
        <polyline points="10.5 2.75 15.25 2.75 15.25 7.5"></polyline>
        <line x1="15.25" y1="2.75" x2="9" y2="9"></line>
        <path d="M15.25,10.5v2.75c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2V4.75c0-1.105,.895-2,2-2h2.75"></path>
      </g>
    </svg>
  );
}
