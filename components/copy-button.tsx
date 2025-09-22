"use client";

import { Icon } from "@/components/icon";

type CopyButtonProps = {
  text: string;
};

export function CopyButton({ text }: CopyButtonProps) {
  function copyToClipboard() {
    navigator.clipboard.writeText(text);
  }

  return (
    <button
      onClick={copyToClipboard}
      className="flex size-8 items-center justify-center rounded-md transition-colors hover:bg-neutral-200"
    >
      <Icon name="copy" className="size-4 text-neutral-400" />
    </button>
  );
}
