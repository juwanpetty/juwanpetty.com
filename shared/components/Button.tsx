import { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utilities/mergeClassNames";
import { Icon } from "@iconify/react";

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
  children: React.ReactNode;
  className?: string;
  leadingIcon?: string;
  trailngIcon?: string;
}

export function Button({
  className,
  children,
  leadingIcon,
  trailngIcon,
  variant = "default",
  ...props
}: Props) {
  const leadingIconMarkup = leadingIcon ? (
    <Icon icon={leadingIcon} className="size-4" />
  ) : null;

  const trailngIconMarkup = trailngIcon ? (
    <Icon icon={trailngIcon} className="size-4" />
  ) : null;

  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {leadingIconMarkup}
      <span className="px-1">{children}</span>
      {trailngIconMarkup}
    </button>
  );
}
