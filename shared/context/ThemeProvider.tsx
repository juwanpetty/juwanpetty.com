"use client";

import React, { useState, useEffect, Fragment } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}
