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
        <body className="antialiased">
          <main className="mx-auto min-h-dvh w-full max-w-2xl pt-16 pb-6 md:pt-32 md:pb-12">
            <div className="px-4 md:px-0">{children}</div>
          </main>
        </body>
      </html>
    </ViewTransitions>
  );
}
