import Navbar from "@/components/navbar/page";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaljourneytourskashmir.com"),

  title: {
    default: "Royal Journey Tours Kashmir | Kashmir Travel & Tour Packages",
    template: "%s | Royal Journey Tours Kashmir",
  },

  description:
    "Explore Kashmir with Royal Journey Tours. Discover Kashmir tour packages, Gulmarg, Pahalgam, Sonamarg and unforgettable Kashmir travel experiences.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
		<Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
