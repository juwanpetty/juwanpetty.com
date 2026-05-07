import { ComponentsItem } from "@/components/components-item";
import { getSortedComponents } from "@/lib/content";

type ComponentsListProps = {
  limit?: number;
};

export function ComponentsList({ limit }: ComponentsListProps) {
  const allComponents = getSortedComponents();
  const components = limit ? allComponents.slice(0, limit) : allComponents;

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
      {components.map((component) => (
        <ComponentsItem key={component._meta.path} component={component} />
      ))}
    </div>
  );
}
