import { WorksItem } from "@/components/works-item";
import { getSortedWorks } from "@/lib/content";

export function WorksList() {
  const works = getSortedWorks();

  return (
    <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
      {works.map((work) => (
        <WorksItem key={work._meta.path} work={work} />
      ))}
    </div>
  );
}
