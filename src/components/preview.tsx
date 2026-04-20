import { ReactNode } from "react";

type PreviewProps = {
  children: ReactNode;
};

export function Preview({ children }: PreviewProps) {
  return (
    <div className="not-prose bg-gray-1 dark:bg-gray-2 border-gray-6 relative my-8 flex min-h-50 min-w-0 items-center justify-center overflow-hidden rounded-2xl border p-6 lg:px-8 lg:py-12">
      {children}
    </div>
  );
}
