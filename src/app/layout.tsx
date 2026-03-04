import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoraX | Elite Trading Indicator for Forex, Crypto & Stocks",
  description:
    "Elevate your trading with AlgoraX. Next-generation tools that deliver sharper market insights across forex, crypto, stocks, and more.",
  openGraph: {
    title: "AlgoraX | Elite Trading Indicator",
    description:
      "Over 8,000 traders use AlgoraX to make confident, data-driven decisions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
