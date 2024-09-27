import type { Config } from "tailwindcss";

function getColorScale(name: string) {
  const scale: { [key: string]: string } = {};
  for (let i = 1; i <= 12; i += 1) {
    scale[i] = `var(--${name}-${i})`;
    scale[`a${i}`] = `var(--${name}-a${i})`;
  }

  return scale;
}


const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        sand: getColorScale('sand'),
        grass: getColorScale('grass'),
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        ],
        serif: ["ui-serif, Georgia, Cambria, Times New Roman, Times, serif"],
        mono: [
          "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
        ],
      },
      keyframes: {
        slideDown: {
          "0%": { height: "0" },
          "100%": { height: `var(--radix-accordion-content-height)` },
        },
        slideUp: {
          "0%": {
            height: `var(--radix-accordion-content-height)`,
          },
          "100%": {
            height: "0",
          },
        },
      },
      animation: {
        "slide-down": "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "slide-up": "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};

export default config;
