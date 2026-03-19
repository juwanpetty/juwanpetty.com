import { CraftItem } from "@/components/craft-item";
import { allCrafts } from "content-collections";

export function CraftList() {
  const crafts = getSortedCrafts();

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
      {crafts.map((craft) => (
        <CraftItem key={craft._meta.path} craft={craft} />
      ))}
    </div>
  );
}

export const getSortedCrafts = () => {
  return allCrafts.sort((a, b) => (a.published < b.published ? 1 : -1));
};
