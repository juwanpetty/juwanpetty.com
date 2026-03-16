import { ArrowLeftIcon } from "@/icons/arrow-left-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { CartIcon } from "@/icons/cart-icon";
import { CommandIcon } from "@/icons/command-icon";
import { EllipsisIcon } from "@/icons/ellipsis-icon";
import { GitHubIcon } from "@/icons/github-icon";
import { GlobeIcon } from "@/icons/globe-icon";
import { MailIcon } from "@/icons/mail-icon";
import { SearchIcon } from "@/icons/search-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const icons = {
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  cart: CartIcon,
  command: CommandIcon,
  ellipsis: EllipsisIcon,
  github: GitHubIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  search: SearchIcon,
} as const;

export type IconName = keyof typeof icons;

type IconProps = ComponentProps<"svg"> & {
  name: IconName;
  className?: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={cn("size-5 shrink-0", className)} {...props} />;
}
