import { ComponentProps } from "react";

export function SpinnerIcon({ ...props }: ComponentProps<"svg">) {
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
        <line x1="9" y1="1.75" x2="9" y2="4.25"></line>
        <line
          x1="14.127"
          y1="3.873"
          x2="12.359"
          y2="5.641"
          opacity=".88"
        ></line>
        <line x1="16.25" y1="9" x2="13.75" y2="9" opacity=".75"></line>
        <line
          x1="14.127"
          y1="14.127"
          x2="12.359"
          y2="12.359"
          opacity=".63"
        ></line>
        <line x1="9" y1="16.25" x2="9" y2="13.75" opacity=".5"></line>
        <line
          x1="3.873"
          y1="14.127"
          x2="5.641"
          y2="12.359"
          opacity=".38"
        ></line>
        <line x1="1.75" y1="9" x2="4.25" y2="9" opacity=".25"></line>
        <line x1="3.873" y1="3.873" x2="5.641" y2="5.641" opacity=".13"></line>
      </g>
    </svg>
  );
}
