import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import { SITE_NAME } from "@/shared/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col overscroll-none antialiased">
        {children}
      </body>
    </html>
  );
}
