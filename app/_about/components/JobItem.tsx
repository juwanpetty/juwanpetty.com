import { ImagePlaceholder } from "@/shared/ImagePlaceholder";
import React from "react";

type Props = {
  company: string;
  role: string;
  date: string;
};

export function JobItem({ company, role, date }: Props) {
  return (
    <div className="flex items-center gap-4 text-base">
      <ImagePlaceholder className="h-10 w-10" />
      <span className="font-medium text-stone-700">{company}</span>
      <div className="grow border-t border-dashed border-stone-500" />
      <span className="text-stone-700">{role}</span>
      <span className="w-[9ch] font-mono text-stone-500">{date}</span>
    </div>
  );
}
