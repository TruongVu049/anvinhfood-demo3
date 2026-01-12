import type React from "react";
import type { Metadata } from "next";
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "MeU Solutions - Vật Liệu Xây Dựng",
  description:
    "Chuyên cung cấp vật liệu xây dựng chất lượng cao: xi măng, sắt thép, gạch, sơn. Giao hàng tận công trình. Hotline: (+84) 2841099879",
  keywords: "vật liệu xây dựng, xi măng, sắt thép, gạch, sơn, MeU Solutions",
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/logo.png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/logo.png" },
      { rel: "android-chrome-512x512", url: "/logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
