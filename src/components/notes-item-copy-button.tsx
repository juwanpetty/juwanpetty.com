"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconCircleCheckFill18, IconLinkFill18 } from "nucleo-ui-fill-18";

const copyButtonVariants = {
  hidden: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

type NotesItemCopyButton = {
  valueToCopy: string;
};

export function NotesItemCopyButton({ valueToCopy }: NotesItemCopyButton) {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(valueToCopy);
    } catch {
      return;
    }

    setIsCopied(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false);
    }, 1750);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="hover:bg-gray-2 flex size-9 items-center justify-center rounded-full transition-colors"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={isCopied ? "checkmark" : "copy"}
          variants={copyButtonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
        >
          {isCopied ? (
            <IconCircleCheckFill18
              aria-hidden="true"
              className="text-gray-11 size-4 shrink-0"
            />
          ) : (
            <IconLinkFill18
              aria-hidden="true"
              className="text-gray-11 size-4 shrink-0 rotate-90"
            />
          )}
        </motion.span>
      </AnimatePresence>

      <span className="sr-only">Copy link</span>
    </button>
  );
}
