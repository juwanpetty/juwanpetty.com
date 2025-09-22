import { ArrowLeftIcon } from "@/icons/arrow-left-icon";
import { ArrowRightIcon } from "@/icons/arrow-right-icon";
import { ArrowUpRightIcon } from "@/icons/arrow-up-right-icon";
import { BoltLightningIcon } from "@/icons/bolt-lightning";
import { ChevronLeftIcon } from "@/icons/chevron-left-icon";
import { ChevronRightIcon } from "@/icons/chevron-right-icon";
import { CircleUserIcon } from "@/icons/circle-user-icon";
import { CopyIcon } from "@/icons/copy-icon";
import { EnvelopeIcon } from "@/icons/envelope-icon";
import { ExternalIcon } from "@/icons/external-icon";
import { PostIcon } from "@/icons/post-icon";
import { SpinnerIcon } from "@/icons/spinner-icon";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

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
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "circle-user": CircleUserIcon,
  copy: CopyIcon,
  envelope: EnvelopeIcon,
  external: ExternalIcon,
  post: PostIcon,
  spinner: SpinnerIcon,
} as const;
