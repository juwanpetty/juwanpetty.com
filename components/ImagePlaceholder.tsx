import { Icon } from "@iconify/react";
import { cn } from "@/utilities/mergeClassNames";

type Props = {
  className?: string;
};

export function ImagePlaceholder({ className }: Props) {
  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center rounded-lg border border-solid border-stone-200 bg-stone-50 text-stone-400",
        className
      )}
    >
      <Icon icon="tabler:image" className="size-8" />
    </div>
  );
}
