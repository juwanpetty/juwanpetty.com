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
      colors: generateScale("sand"),
      fontFamily: {
        sans: [
          "var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
        ],
        serif: ["ui-serif, Georgia, Cambria, Times New Roman, Times, serif"],
        mono: [
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
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

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [`${name}-${id}`, `var(--${name}-${id})`],
      [`${name}-a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();
  return Object.fromEntries(scale);
}
