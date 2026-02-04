import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ashar Shaikh | Associate Lawyer",
  description: "Portfolio of Ashar Shaikh, Associate Lawyer specializing in Corporate Governance, Project Finance, and Public Private Partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-p-24">
      <body className={cn(playfair.variable, inter.variable, "min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
