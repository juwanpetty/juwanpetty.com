import React, { createElement } from "react";
import { cn } from "../utilities/mergeClassNames";

type Props = {
  children: React.ReactNode;
  variant: "bodySm" | "bodyMd" | "headingSm" | "headingMd" | "headingLg";
  className?: string;
};

export function Text({ children, variant, className }: Props) {
  function getElementType() {
    switch (variant) {
      case "headingSm":
        return "h3";
      case "headingMd":
        return "h2";
      case "headingLg":
        return "h1";
      default:
        return "p";
    }
  }

  const variantClasses = {
    bodySm: "text-base",
    bodyMd: "text-base",
    headingSm: "text-base font-medium",
    headingMd: "text-base font-medium",
    headingLg: "text-base font-medium",
  };

  return createElement(
    getElementType(),
    { className: cn(variantClasses[variant], className) },
    children
  );
}
