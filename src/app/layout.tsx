import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/utilities/merge-classnames";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Juwan Petty",
    default: "Juwan Petty",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          inter.variable,
          "scroll-pt-16 bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-white"
        )}
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="isolate">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
