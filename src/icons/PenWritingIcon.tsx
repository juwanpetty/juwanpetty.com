import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function PenWritingIcon({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      className={cn("size-5 shrink-0", className)}
      {...props}
    >
      <g fill="currentColor">
        <path d="M11.414 2.84802L3.605 10.657C2.742 11.521 2.204 14.063 2.012 15.116C1.968 15.358 2.046 15.607 2.22 15.781C2.362 15.923 2.553 16.001 2.75 16.001C2.794 16.001 2.839 15.997 2.884 15.989C3.937 15.798 6.479 15.26 7.343 14.396L15.152 6.58702C16.182 5.55602 16.182 3.88002 15.152 2.84902C14.154 1.85102 12.412 1.85102 11.414 2.84802Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 15.25C9.25 14.8358 9.58579 14.5 10 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H10C9.58579 16 9.25 15.6642 9.25 15.25Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.75 11.75C12.75 11.3358 13.0858 11 13.5 11H15.25C15.6642 11 16 11.3358 16 11.75C16 12.1642 15.6642 12.5 15.25 12.5H13.5C13.0858 12.5 12.75 12.1642 12.75 11.75Z"
        ></path>
      </g>
    </svg>
  );
}
