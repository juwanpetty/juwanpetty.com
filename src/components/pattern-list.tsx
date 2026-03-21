import { PatternItem } from "@/components/pattern-item";
import { allPatterns } from "content-collections";

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

export const getSortedPatterns = () => {
  return allPatterns.sort((a, b) => (a.published < b.published ? 1 : -1));
};
