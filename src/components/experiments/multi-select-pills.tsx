"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import useMeasure from "react-use-measure";
import { IconCircleCheckFill18 } from "nucleo-ui-fill-18";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

type Pill = {
  id: string;
  label: string;
};

const pills: Pill[] = [
  { id: "action", label: "Action" },
  { id: "adventure", label: "Adventure" },
  { id: "rpg", label: "RPG" },
  { id: "strategy", label: "Strategy" },
  { id: "simulation", label: "Simulation" },
  { id: "sports", label: "Sports" },
  { id: "puzzle", label: "Puzzle" },
];

export function MultiSelectPills() {
  const [selectedPills, setSelectedPills] = useState<string[]>([]);

  function togglePill(id: string) {
    setSelectedPills((prev) =>
      prev.includes(id) ? prev.filter((pillId) => pillId !== id) : [...prev, id]
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center">
      <motion.div className="flex w-full max-w-lg flex-wrap justify-center gap-3">
        {pills.map((pill, index) => (
          <div key={pill.id} className={cn(index >= 5 && "hidden sm:block")}>
            <Pill
              label={pill.label}
              selected={selectedPills.includes(pill.id)}
              onClick={() => togglePill(pill.id)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

type PillProps = {
  label: string;
  onClick: () => void;
  selected: boolean;
};

function Pill({ label, onClick, selected }: PillProps) {
  const [ref, bounds] = useMeasure();
  const contentWidth = bounds.width ? bounds.width : undefined;

  return (
    <motion.button
      key={label}
      onClick={onClick}
      className={cn(
        "border-gray-4 dark:bg-gray-1 flex h-10 overflow-hidden rounded-full border bg-white will-change-transform",
        selected && "border-blue-8 dark:bg-blue-2 bg-blue-2 border-2"
      )}
      animate={{ width: contentWidth }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.5 }}
    >
      <div ref={ref} className="flex items-center gap-1 px-3">
        <span className="text-gray-12 px-1 text-sm font-medium whitespace-nowrap">
          {label}
        </span>
        <AnimatePresence initial={false} mode="popLayout">
          {selected ? (
            <motion.span
              key="check"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <IconCircleCheckFill18 className="text-blue-9 size-5" />
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
