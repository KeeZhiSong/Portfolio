import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kee Zhi Song - Portfolio",
  description: "Personal portfolio of Kee Zhi Song, Computer Science Student at NUS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-900 text-gray-100`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

