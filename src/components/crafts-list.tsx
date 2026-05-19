import { CraftsItem } from "@/components/crafts-item";
import { getSortedCrafts } from "@/lib/content";
import { cn } from "@/lib/utils";

type CraftsListProps = {
  className?: string;
  limit?: number;
};

export function CraftsList({ className, limit }: CraftsListProps) {
  const allCrafts = getSortedCrafts();
  const crafts = limit ? allCrafts.slice(0, limit) : allCrafts;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-15",
        className
      )}
    >
      {crafts.map((craft) => (
        <CraftsItem key={craft._meta.path} craft={craft} />
      ))}
    </div>
  );
}
