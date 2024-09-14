import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";

import "../styles/styles.scss";
import { ThemeProvider } from "@context/ThemeProvider";
import { cn } from "@utilities/merge-classnames";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-neutral-50 font-sans text-neutral-900 transition-colors dark:bg-neutral-900",
          `${inter.variable} ${GeistSans.variable} ${GeistMono.variable}`
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
