import { MainLayout } from "@/components/layouts/main-layout";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme";
import { Metadata } from "next";
import { inter, jetBrainsMono } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s — Juwan Petty",
    default: "Juwan Petty",
  },
  description:
    "Design engineer sharing projects, writing, and experiments across frontend engineering and UI systems.",
  openGraph: {
    title: "Juwan Petty",
    description:
      "Design engineer sharing projects, writing, and experiments across frontend engineering and UI systems.",
    url: "https://juwanpetty.com",
    siteName: "Juwan Petty",
    type: "website",
  },
  alternates: {
    canonical: "https://juwanpetty.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "text-secondary-foreground font-sans antialiased",
        inter.variable,
        jetBrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="isolate">
            <MainLayout>{children}</MainLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
