"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import { IconCircleCheckFill18 } from "nucleo-ui-fill-18";
import { IconClone2Outline18 } from "nucleo-ui-outline-18";
import { useRef, useState } from "react";

export function CopyButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const variants = {
    hidden: { opacity: 0.15, scale: 0.5, blur: "4px" },
    visible: { opacity: 1, scale: 1, blur: "0px" },
  };

  function copyToClipboard() {
    // copy API logic goes here

    setCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 1750);
  }

  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        className="rounded-full transition-transform active:scale-[0.97]"
        onClick={copyToClipboard}
      >
        <div>
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="checkmark"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15 }}
              >
                <IconCircleCheckFill18 className="size-5 shrink-0" />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15 }}
              >
                <IconClone2Outline18 className="size-5 shrink-0" />
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <span>Copy page</span>
      </Button>
    </div>
  );
}
