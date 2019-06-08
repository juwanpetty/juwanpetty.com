import React, { ButtonHTMLAttributes, createElement } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../utilities/mergeClassNames";

import { Icons } from "./Icons";

export const buttonVariants = cva(
  "flex h-8 items-center gap-[2px] rounded-md px-[10px] text-sm font-medium shadow-sm transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-solid border-stone-300 bg-white hover:bg-stone-100",
        primary: "bg-stone-800 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  content: string;
  className?: string;
  leadingIcon?: keyof typeof Icons;
  trailngIcon?: keyof typeof Icons;
}

export function Button({
  className,
  content,
  leadingIcon,
  trailngIcon,
  variant = "default",
  ...props
}: Props) {
  const leadingIconMarkup = leadingIcon
    ? createElement(Icons[leadingIcon], { size: 16 })
    : null;

  const trailngIconMarkup = trailngIcon
    ? createElement(Icons[trailngIcon], { size: 16 })
    : null;

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {leadingIconMarkup}
      <span className="px-1">{content}</span>
      {trailngIconMarkup}
    </button>
  );
}
