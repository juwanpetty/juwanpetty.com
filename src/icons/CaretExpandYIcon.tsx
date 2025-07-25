import { cn } from "@/utilities/merge-classnames";
import { ComponentProps } from "react";

export function CaretExpandYIcon({
  className,
  ...props
}: ComponentProps<"svg">) {
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
        <path d="M10.035,2.581c-.466-.688-1.604-.688-2.07,0l-2.348,3.468c-.26,.384-.286,.877-.069,1.287,.217,.41,.641,.664,1.104,.664h4.696c.463,0,.887-.254,1.104-.664,.217-.409,.191-.902-.069-1.287l-2.348-3.468Z"></path>
        <path d="M11.348,10H6.652c-.463,0-.887,.254-1.104,.664-.217,.409-.191,.902,.069,1.287l2.348,3.468c.233,.344,.62,.549,1.035,.549s.802-.206,1.035-.549l2.348-3.468c.26-.384,.286-.877,.069-1.287-.217-.41-.641-.664-1.104-.664Z"></path>
      </g>
    </svg>
  );
}
