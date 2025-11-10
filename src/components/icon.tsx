import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { GitHubIcon } from "@/icons/github-icon";
import { MailIcon } from "@/icons/mail-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const icons = {
  "arrow-right": ArrowRightIcon,
  github: GitHubIcon,
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
