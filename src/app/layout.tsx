import type { Metadata } from "next";
import { Inter, Mona_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { cn } from "@/lib/utils";
import { Footer } from "@/sections";
import Provider from "@/provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zort - AI-Powered Bet Tracking",
  description: "Track your betslips!",
  metadataBase: new URL("https://zort-marketing.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          ` ${inter.variable} ${monaSans.variable}`,
          "min-h-screen antialiased",
        )}
      >
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
