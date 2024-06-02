import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SidebarProvider } from "@/context/SidebarProvider";
import { AsideProvider } from "@/context/AsideProvider";

import "../styles/styles.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable}`}
    >
      <body className="bg-stone-50 text-stone-700 transition-colors md:bg-stone-100">
        <ThemeProvider>
          <SidebarProvider>
            <AsideProvider>
              <Layout>{children}</Layout>
            </AsideProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
