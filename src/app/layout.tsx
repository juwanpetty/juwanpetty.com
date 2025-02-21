import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juwan Petty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={inter.className}>
        <body className="relative flex min-h-svh flex-col antialiased">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
