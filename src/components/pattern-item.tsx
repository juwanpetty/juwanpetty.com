import type { Pattern } from "content-collections";
import Link from "next/link";
import { IconCodeFill18 } from "nucleo-ui-fill-18";

type PatternItemProps = {
  pattern: Pattern;
};

export function PatternItem({ pattern }: PatternItemProps) {
  const { title } = pattern;
  const path = pattern._meta.path;

  return (
    <Link
      href={`/components/${path}`}
      className="flex w-full items-center justify-between py-2 opacity-100 transition-opacity duration-200 group-hover/list:opacity-40 hover:opacity-100"
    >
      <div className="flex max-w-4/5 min-w-0 items-center gap-2">
        <div className="border-gray-4 flex h-6.5 w-6 items-center justify-center rounded-md border">
          <IconCodeFill18 className="text-gray-11 size-3" />
        </div>
        <span className="truncate text-base">{title}</span>
      </div>
      {/* <span className="text-muted-foreground text-base whitespace-nowrap">
        {formattedDate}
      </span> */}
    </Link>
  );
}
