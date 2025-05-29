import { IconsMap } from "@/components/icons";

export type ThemeType = "light" | "dark" | "system";

export const THEME_STATES: readonly ThemeType[] = [
  "light",
  "dark",
  "system",
] as const;

export const THEME_ICONS: Record<ThemeType, keyof typeof IconsMap> = {
  light: "sun",
  dark: "moon",
  system: "desktop",
} as const;
