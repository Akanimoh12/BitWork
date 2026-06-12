import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BitWork — The Opportunity Marketplace Built on Bitcoin",
  description:
    "Post work. Lock payment on-chain. Get paid in sBTC, USDCx, or STX — streamed block by block. No middlemen. No Discord chaos. No waiting.",
  metadataBase: new URL("https://bitwork.xyz"),
  openGraph: {
    title: "BitWork — The Opportunity Marketplace Built on Bitcoin",
    description:
      "Post work. Lock payment on-chain. Get paid in sBTC, USDCx, or STX — streamed block by block.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BitWorkXYZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
