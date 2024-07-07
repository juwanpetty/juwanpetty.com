import React, { createElement } from "react";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  children: React.ReactNode;
  variant: "bodySm" | "bodyMd" | "headingSm" | "headingMd" | "headingLg";
  className?: string;
};

export function Text({ children, variant, className }: Props) {
  function getElementType() {
    switch (variant) {
      case "headingSm":
        return { elementType: "h3", isHeader: true };
      case "headingMd":
        return { elementType: "h2", isHeader: true };
      case "headingLg":
        return { elementType: "h1", isHeader: true };
      default:
        return { elementType: "p", isHeader: false };
    }
  }

  function generateIdFromText(text: React.ReactNode): string {
    if (typeof text === "string") {
      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");
    }
    return "";
  }

  const { elementType, isHeader } = getElementType();
  const id = isHeader ? generateIdFromText(children) : undefined;

  const variantClasses = {
    bodySm: "text-sm text-stone-500",
    bodyMd: "text-sm text-stone-500",
    headingSm: "text-sm font-medium",
    headingMd: "text-sm font-medium",
    headingLg: "text-sm font-medium",
  };

  return createElement(
    elementType,
    {
      className: cn(variantClasses[variant], className),
      ...(isHeader && { id }),
    },
    children
  );
}
