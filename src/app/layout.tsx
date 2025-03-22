import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import GrainEffect from "@/components/visualEffects/GrainEffect";

const MainFont = Bricolage_Grotesque({
  subsets: ["latin"],
});

const OswaldFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "Jerónimo Sánchez - SOCGER",
  description: "socger official portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ 
          cn(
            geistSans.variable, 
            geistMono.variable, 
            MainFont.className, 
            OswaldFont.variable
          )
        }
      >
        <GrainEffect />
        {children}
      </body>
    </html>
  );
}
