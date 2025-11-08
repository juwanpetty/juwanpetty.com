import { MainLayout } from "@/components/layouts/main-layout";
import { geistMono, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Juwan Petty",
    default: "Juwan Petty",
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
        "font-sans antialiased",
        geistSans.variable,
        geistMono.variable
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
