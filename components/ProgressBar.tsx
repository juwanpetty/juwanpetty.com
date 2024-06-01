"use client";

import React from "react";
import * as Progress from "@radix-ui/react-progress";

type Props = {
  initialProgress: number;
};

export function ProgressBar({ initialProgress }: Props) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(initialProgress), 500);
    return () => clearTimeout(timer);
  }, [initialProgress]);

  return (
    <Progress.Root
      value={progress}
      className="relative h-2 w-full overflow-hidden rounded-full bg-stone-100"
    >
      <Progress.Indicator
        className="h-full bg-stone-400 transition-transform duration-500"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}
