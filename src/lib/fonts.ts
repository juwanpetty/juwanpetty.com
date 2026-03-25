import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = localFont({
  src: "../../public/assets/fonts/InterVariable.ttf",
  variable: "--font-inter",
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
