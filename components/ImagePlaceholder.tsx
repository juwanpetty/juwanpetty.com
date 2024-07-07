import { Icon } from "@iconify/react";
import { cn } from "@/utilities/merge-classnames";

type Props = {
  className?: string;
};

export function ImagePlaceholder({ className }: Props) {
  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center rounded-lg border border-solid border-sand-6 bg-sand-2 text-sand-11",
        className
      )}
    >
      <Icon icon="radix-icons:image" className="size-5" />
    </div>
  );
}
