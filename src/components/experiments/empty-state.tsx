"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, type ComponentProps } from "react";

const CARD_DIRECTION = {
  LEFT: -1,
  RIGHT: 1,
} as const;

export function EmptyState() {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    initial: (direction: number) => ({
      transform: `translateX(${50 * direction}%) translateY(5%) rotate(${
        10 * direction
      }deg) scale(0.85)`,
    }),
    hovered: (direction: number) => ({
      transform: `translateX(${65 * direction}%) translateY(7%) rotate(${
        15 * direction
      }deg) scale(0.85)`,
    }),
  };

  return (
    <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div
          className="mb-4 grid place-items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <StackedCard
            className="z-10 shadow-sm"
            initial={{ transform: "scale(1)" }}
            animate={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />
          <StackedCard
            initial="initial"
            animate={isHovered ? "hovered" : "initial"}
            custom={CARD_DIRECTION.LEFT}
            variants={variants}
          />
          <StackedCard
            initial="initial"
            animate={isHovered ? "hovered" : "initial"}
            custom={CARD_DIRECTION.RIGHT}
            variants={variants}
          />
        </div>

        <div className="flex flex-col gap-1 text-center text-sm">
          <h1 className="text-secondary-foreground font-medium">
            No collections
          </h1>
          <p className="text-muted-foreground">
            Create a collection to organize your writing.
          </p>
        </div>
        <Button variant="outline" asChild>
          <motion.button
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.01,
            }}
          >
            <span>Create collection</span>
          </motion.button>
        </Button>
      </div>
    </div>
  );
}

type StackedCardProps = ComponentProps<typeof motion.div> & {
  className?: string;
};

function StackedCard({ className, ...props }: StackedCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-background border-border col-1 row-1 size-25 rounded-xl border p-1 shadow-2xs",
        className
      )}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      {...props}
    >
      <div className="border-border bg-secondary h-full w-full rounded-md border" />
    </motion.div>
  );
}
