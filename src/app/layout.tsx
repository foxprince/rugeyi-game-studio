import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUGEYI Game - Pixel Game Studio",
  description: "Beijing Rugeyi Technology Co., Ltd. - Professional pixel game development and publishing studio. Creating adorable pixel games for players worldwide.",
  keywords: ["RUGEYI", "pixel games", "game development", "game publishing", "Beijing", "mobile games", "indie games"],
  authors: [{ name: "RUGEYI Technology Co., Ltd." }],
  openGraph: {
    title: "RUGEYI Game - Pixel Game Studio",
    description: "Professional pixel game development and publishing studio in Beijing",
    url: "https://likesong.net",
    siteName: "RUGEYI Game",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RUGEYI Game - Pixel Game Studio",
    description: "Professional pixel game development and publishing studio in Beijing",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
