import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function MainLayout({ className, children }: ComponentProps<"div">) {
  return (
    <div className={cn("flex min-h-screen flex-col", className)}>
      {children}
    </div>
  );
}
