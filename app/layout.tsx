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
  title: "CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ AN VĨNH",
  description:
    "Chuyên cung cấp thực phẩm đông lạnh, hải sản tươi ngon, chất lượng cao. Giao hàng tận nơi, bảo quản lạnh chuẩn. Hotline: 0813.662.778",
  keywords: "thực phẩm đông lạnh, hải sản, cá hồi, tôm, cua, đồ đông lạnh",
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon.png" },
      { rel: "android-chrome-512x512", url: "/favicon.png" },
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
