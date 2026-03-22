import { PatternItem } from "@/components/pattern-item";
import { getSortedPatterns } from "@/lib/content";

export function PatternList() {
  const patterns = getSortedPatterns();

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
      {patterns.map((pattern) => (
        <PatternItem key={pattern._meta.path} pattern={pattern} />
      ))}
    </div>
  );
}
