"use client";

import { Icons } from "@/components/icons";
import { EMAIL_ADDRESS } from "@/constants";

export function CopyEmailButton() {
  function handleEmailCopy() {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
  }

  return (
    <button
      type="button"
      onClick={handleEmailCopy}
      aria-label="Copy email address"
      className="border-neutral-12/10 hover:bg-neutral-4 flex h-8 items-center gap-1.5 rounded-[10px] border px-2.5 transition ease-[ease]"
    >
      <Icons icon="copy" className="text-neutral-11 size-4" />
      <span className="text-sm font-medium">Email</span>
    </button>
  );
}
