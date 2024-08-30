/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
};
