"use client";

import { createContext, useState, useMemo, useCallback } from "react";

export const SidebarContext = createContext({
  isSidebarOpen: true,
  toggleSidebarOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function SidebarProvider({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebarOpen = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebarOpen,
    }),
    [isSidebarOpen, toggleSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
