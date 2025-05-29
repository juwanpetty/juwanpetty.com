import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ThemeType, THEME_STATES } from "@/types/theme";

export function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(() => {
    if (theme && THEME_STATES.includes(theme as ThemeType)) {
      return THEME_STATES.indexOf(theme as ThemeType);
    }
    return 0;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newIndex: number) => {
    setSelectedIndex(newIndex);
    setTheme(THEME_STATES[newIndex]);
  };

  return {
    mounted,
    selectedIndex,
    currentTheme: THEME_STATES[selectedIndex],
    handleThemeChange,
  };
}
