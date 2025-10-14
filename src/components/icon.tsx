import { ArrowUpRightIcon } from "@/icons/arrow-up-right-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { ExternalIcon } from "@/icons/external-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { CircleUserIcon } from "@/icons/circle-user-icon";
import { PostIcon } from "@/icons/post-icon";
import { BoltLightningIcon } from "@/icons/bolt-lightning";
import { ArrowLeftIcon } from "@/icons/arrow-left-icon";
import { EnvelopeIcon } from "@/icons/envelope-icon";
import { SpinnerIcon } from "@/icons/spinner-icon";

export type IconName = keyof typeof icons;

type IconProps = ComponentProps<"svg"> & {
  name: IconName;
  className?: string;
};

export function Icon({ name, className, ...props }: IconProps) {
  const SvgIcon = icons[name];
  return <SvgIcon className={cn("size-5 shrink-0", className)} {...props} />;
}

const icons = {
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "arrow-up-right": ArrowUpRightIcon,
  bolt: BoltLightningIcon,
  "circle-user": CircleUserIcon,
  envelope: EnvelopeIcon,
  external: ExternalIcon,
  post: PostIcon,
  spinner: SpinnerIcon,
} as const;
