import { ButtonHTMLAttributes, createElement } from "react";
import { Icons } from "@/shared/Icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: keyof typeof Icons;
  className?: string;
}

export function IconButton({ label, icon, className, ...props }: Props) {
  return (
    <button type="button" className={className} {...props}>
      {createElement(Icons[icon])}
      <span className="sr-only">{label}</span>
    </button>
  );
}
