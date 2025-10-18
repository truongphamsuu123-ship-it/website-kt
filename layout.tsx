import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tiệc Cưới Khánh Trương - Dịch Vụ Trang Trí Tiệc Cưới Sang Trọng",
  description: "Dịch vụ trang trí tiệc cưới chuyên nghiệp, sang trọng và đầy đủ. Liên hệ: 0901268169 | 0949569068",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
