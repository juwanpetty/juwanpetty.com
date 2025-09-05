import { ArrowUpRightIcon } from "@/icons/arrow-up-right-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { ExternalIcon } from "@/icons/external-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const icons = {
  "arrow-right": ArrowRightIcon,
  "arrow-up-right": ArrowUpRightIcon,
  external: ExternalIcon,
} as const;

type IconName = keyof typeof icons;

type IconProps = ComponentProps<"svg"> & {
  name: IconName;
  className?: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={cn("size-5 shrink-0", className)} {...props} />;
}
