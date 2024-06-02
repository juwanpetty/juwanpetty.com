"use client";

import { createContext, useState, useMemo, useCallback } from "react";

export const AsideContext = createContext({
  isAsideOpen: true,
  toggleAsideOpen: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function AsideProvider({ children }: Props) {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const toggleAsideOpen = useCallback(() => {
    setIsAsideOpen((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      isAsideOpen,
      toggleAsideOpen,
    }),
    [isAsideOpen, toggleAsideOpen]
  );

  return (
    <AsideContext.Provider value={value}>{children}</AsideContext.Provider>
  );
}
