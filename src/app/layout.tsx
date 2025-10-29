import { ThemeProvider } from "@/providers/theme";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter as InterFont } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Juwan Petty",
    default: "Juwan Petty",
  },
};

const Inter = InterFont({
  subsets: ["latin"],
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
      suppressHydrationWarning
      className={cn(
        "bg-white font-sans text-neutral-800 antialiased",
        GeistSans.variable,
        GeistMono.variable,
        Inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="isolate">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
