import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainLayout({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      <main className="flex-1 py-32">
        <div className="mx-auto w-full max-w-173 px-6">{children}</div>
      </main>
    </div>
  );
}
