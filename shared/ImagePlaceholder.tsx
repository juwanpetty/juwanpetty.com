import { cn } from "../utilities/mergeClassNames";
import { Icons } from "./Icons";

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
      <Icons.Image size={20} />
    </div>
  );
}
