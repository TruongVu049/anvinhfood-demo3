import type React from "react"
import type { Metadata } from "next"
import { Be_Vietnam_Pro, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "An Vinh Food | Thực Phẩm Đông Lạnh & Hải Sản Cao Cấp",
  description:
    "Chuyên cung cấp thực phẩm đông lạnh, hải sản tươi ngon, chất lượng cao. Giao hàng tận nơi, bảo quản lạnh chuẩn. Hotline: 0813.662.778",
  keywords: "thực phẩm đông lạnh, hải sản, cá hồi, tôm, cua, đồ đông lạnh",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
