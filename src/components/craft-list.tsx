import { CraftItem } from "@/components/craft-item";
import { getPublishedCrafts } from "@/data/crafts";

export function CraftList() {
  const crafts = getPublishedCrafts();

  return (
    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8">
      {crafts.map((craft) => (
        <CraftItem key={craft.id} craft={craft} />
      ))}
    </div>
  );
}
