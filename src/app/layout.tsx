import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
// import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Juwan Petty",
    default: "Juwan Petty",
  },
};

const inter = localFont({
  variable: "--font-inter",
  src: [
    { path: "./InterVariable.woff2", style: "normal" },
    { path: "./InterVariable-Italic.woff2", style: "italic" },
  ],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
          "bg-white font-sans text-neutral-800 antialiased",
          inter.variable,
          geistMono.variable
        )}
      >
        <body>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
          <div className="isolate">{children}</div>
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
