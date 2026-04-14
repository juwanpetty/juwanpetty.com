import { ReactNode } from "react";

type PreviewProps = {
  children: ReactNode;
};

export function Preview({ children }: PreviewProps) {
  return (
    <div className="bg-background border-border relative my-8 flex flex-col overflow-hidden rounded-2xl border p-0.5 [contain-intrinsic-size:0_400px] [content-visibility:auto]">
      <div className="border-border bg-background relative flex min-h-50 min-w-0 flex-1 flex-col flex-wrap items-center justify-center overflow-hidden rounded-xl border p-6 lg:px-8 lg:py-12">
        <div className="not-prose flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
