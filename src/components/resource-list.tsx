import { ResourceItem } from "@/components/resource-item";
import resources from "@/data/resources.json";

export function ResourceList() {
  return (
    <div className="flex flex-col gap-y-3">
      {resources.map((resource) => (
        <ResourceItem key={resource.title} resource={resource} />
      ))}
    </div>
  );
}
