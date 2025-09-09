"use client";

import { Playground } from "@/features/blog/components/playground";
import { useState } from "react";

export function TextReveal() {
  const [reset, setReset] = useState(0);

  const label = "Animations";

  return (
    <Playground>
      <div key={reset} className="flex flex-col gap-6">
        <h1 className="overflow-y-hidden text-[32px] font-semibold tracking-[-0.05em]">
          {label.split("").map((char, index) => {
            return (
              <span
                key={index}
                className="animate-reveal-text inline-block [animation-fill-mode:backwards]"
                style={{ animationDelay: `calc(${index} * 0.03s)` }}
              >
                {char}
              </span>
            );
          })}
        </h1>
        <button
          className="h-8 rounded-full bg-white px-3 text-sm font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04)]"
          onClick={() => setReset(reset + 1)}
        >
          Replay animation
        </button>
      </div>
    </Playground>
  );
}
