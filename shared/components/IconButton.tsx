import { ButtonHTMLAttributes, createElement } from "react";
import { Icons } from "@/shared/Icons";
import { cn } from "@/utilities/mergeClassNames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: keyof typeof Icons;
  className?: string;
}

export function IconButton({ label, icon, className, ...props }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "inner-shadow flex size-8 items-center justify-center rounded-lg border border-solid border-stone-200 drop-shadow-sm",
        className
      )}
      {...props}
    >
      {createElement(Icons[icon], { className: "size-4" })}
      <span className="sr-only">{label}</span>
    </button>
  );
}
