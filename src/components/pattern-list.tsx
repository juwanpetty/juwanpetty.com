import { PatternItem } from "@/components/pattern-item";
import { getSortedPatterns } from "@/lib/content";
import { cn } from "@/lib/utils";

type PatternListProps = {
  className?: string;
  limit?: number;
};

export function PatternList({ className, limit }: PatternListProps) {
  const allPatterns = getSortedPatterns();
  const components = limit ? allPatterns.slice(0, limit) : allPatterns;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-15",
        className
      )}
    >
      {components.map((pattern) => (
        <PatternItem key={pattern._meta.path} pattern={pattern} />
      ))}
    </div>
  );
}
