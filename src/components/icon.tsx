import { ArrowLeftIcon } from "@/icons/arrow-left-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { BackIcon } from "@/icons/back-icon";
import { GitHubIcon } from "@/icons/github-icon";
import { GlobeIcon } from "@/icons/globe-icon";
import { MailIcon } from "@/icons/mail-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const icons = {
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  back: BackIcon,
  github: GitHubIcon,
  globe: GlobeIcon,
  mail: MailIcon,
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
