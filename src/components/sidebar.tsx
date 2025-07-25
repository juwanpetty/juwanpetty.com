"use client";

import { cn } from "@/utilities/merge-classnames";
import { ComponentProps, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

function SidebarHeader({
  className,
  ...props
}: { className?: string } & ComponentProps<"div">) {
  return <div className={cn("p-4", className)} {...props} />;
}

function SidebarContent({
  className,
  ...props
}: { className?: string } & ComponentProps<"div">) {
  return <div className={cn("flex flex-col", className)} {...props} />;
}

function SidebarFooter({
  className,
  ...props
}: { className?: string } & ComponentProps<"div">) {
  return <div className={cn("sticky bottom-0 p-4", className)} {...props} />;
}

function SidebarGroupLabel({
  children,
  className,
  ...props
}: {
  children?: string;
  className?: string;
} & ComponentProps<"div">) {
  if (!children) return null;

  return (
    <div
      className={cn("flex items-center justify-start px-2 py-1", className)}
      {...props}
    >
      <span className="text-xs font-medium text-neutral-600">{children}</span>
    </div>
  );
}

function SidebarGroupContent({
  className,
  ...props
}: { className?: string } & ComponentProps<"div">) {
  return <div className={cn("flex flex-col gap-0.5", className)} {...props} />;
}

function SidebarGroup({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
} & ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-0.5 p-4", className)} {...props}>
      {children}
    </div>
  );
}

function SidebarMenuButton({
  disabled,
  className,
  asChild = false,
  ...props
}: {
  disabled?: boolean;
  className?: string;
  asChild?: boolean;
} & ComponentProps<"button">) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "flex h-8 w-full items-center gap-1.5 rounded-md bg-white p-1.5 transition-colors",
        "[&>span]:text-sm [&>span]:font-medium [&>span]:text-neutral-600",
        "[&>svg]:mx-px [&>svg]:size-4.5 [&>svg]:text-neutral-600",
        "hover:bg-black/4",
        { "hover cursor-not-allowed opacity-50 hover:bg-white": disabled },
        className
      )}
      tabIndex={disabled ? -1 : 0}
      {...props}
    />
  );
}

function Sidebar({
  className,
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
} & ComponentProps<"aside">) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 w-72 overflow-y-auto border-r border-solid border-black/4 max-md:hidden",
        className
      )}
      {...props}
    >
      <nav aria-label="sidebar">{children}</nav>
    </aside>
  );
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuButton,
};
