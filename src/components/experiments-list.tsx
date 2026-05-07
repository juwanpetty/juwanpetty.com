import { ExperimentsItem } from "@/components/experiments-item";
import { getSortedExperiments } from "@/lib/content";
import { cn } from "@/lib/utils";

type ExperimentsListProps = {
  className?: string;
  limit?: number;
};

export function ExperimentsList({ className, limit }: ExperimentsListProps) {
  const allExperiments = getSortedExperiments();
  const experiments = limit ? allExperiments.slice(0, limit) : allExperiments;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-15",
        className
      )}
    >
      {experiments.map((experiment) => (
        <ExperimentsItem key={experiment._meta.path} experiment={experiment} />
      ))}
    </div>
  );
}
