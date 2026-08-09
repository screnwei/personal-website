"use client"

import { PHOTOGRAPHER_INFO } from "@/data/portfolio"
import { Camera, ArrowUp } from "lucide-react"

interface FooterProps {
  onOpenImageGuide: () => void
}

export function Footer({ onOpenImageGuide }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-background border-t border-border/40 py-16 text-muted-foreground font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-serif text-2xl font-normal tracking-tight text-foreground block">
              {PHOTOGRAPHER_INFO.name.toUpperCase()}
            </span>
            <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              {PHOTOGRAPHER_INFO.title} • {PHOTOGRAPHER_INFO.location}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-sans uppercase tracking-widest">
            <a href="#work" className="hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              Introduction
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Services & Rates
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
            <button
              onClick={onOpenImageGuide}
              className="text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
            >
              <Camera className="w-3.5 h-3.5" />
              Image Manifest
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            © {new Date().getFullYear()} {PHOTOGRAPHER_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-foreground transition-colors focus:outline-none"
          >
            Back to top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
