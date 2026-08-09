import type { Metadata } from "next"
import { Cormorant_Garamond, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Alex Morgan — Architectural & Environmental Photographer",
  description: "Specializing in spatial geometry, architectural documentation, and environmental portraiture. Portfolio template for professional photographers.",
}

const serifHeading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

const sansBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased scroll-smooth",
        fontMono.variable,
        sansBody.variable,
        serifHeading.variable
      )}
    >
      <body className="bg-background text-foreground font-sans min-h-screen selection:bg-neutral-800 selection:text-neutral-100 dark:selection:bg-neutral-200 dark:selection:text-neutral-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
