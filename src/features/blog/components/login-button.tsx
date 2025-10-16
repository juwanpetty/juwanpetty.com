"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Playground } from "@/features/blog/components/playground";
import { cn } from "@/lib/utils";
import { LoaderCircleIcon } from "lucide-react";

type ButtonState = "idle" | "loading" | "success";

export function LoginButtonPlayground() {
  return (
    <Playground>
      <LoginButton />
    </Playground>
  );
}

export function LoginButton() {
  const [buttonState, setButtonState] = useState<ButtonState>("idle");

  const buttonCopy: Record<ButtonState, ReactNode> = {
    idle: "Send magic link",
    loading: <LoaderCircleIcon className="animate-spin" />,
    success: "Magic link sent!",
  };

  return (
    <button
      className={cn(
        "flex h-10 w-45 cursor-pointer items-center justify-center rounded-md bg-blue-500 px-3.5 text-sm font-medium text-white shadow-xs",
        "transition-colors hover:bg-blue-400",
        "disabled:cursor-default disabled:hover:bg-blue-500"
      )}
      disabled={buttonState !== "idle"}
      onClick={() => {
        setButtonState("loading");
        setTimeout(() => setButtonState("success"), 1750);
        setTimeout(() => setButtonState("idle"), 3500);
      }}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={buttonState}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
