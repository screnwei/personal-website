"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Camera, Menu, X, Image as ImageIcon } from "lucide-react"
import { PHOTOGRAPHER_INFO } from "@/data/portfolio"

interface NavbarProps {
  onOpenImageGuide: () => void
}

export function Navbar({ onOpenImageGuide }: NavbarProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#" className="group flex flex-col focus:outline-none">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">
            {PHOTOGRAPHER_INFO.name.toUpperCase()}
          </span>
          <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-sans uppercase">
            Photography • {PHOTOGRAPHER_INFO.location}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase">
          <a
            href="#work"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Introduction
          </a>
          <a
            href="#pricing"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Services & Rates
          </a>
          <a
            href="#contact"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Image Guide Trigger Button */}
          <button
            onClick={onOpenImageGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-full border border-border/80 bg-muted/40 hover:bg-muted transition-colors text-foreground focus:outline-none"
            title="View photographer image replacement instructions"
          >
            <Camera className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span className="hidden sm:inline">Replace Images</span>
            <span className="sm:hidden">Guide</span>
          </button>

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors focus:outline-none"
              aria-label="Toggle theme"
              title="Toggle theme (Hotkey: d)"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-lg focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium tracking-widest uppercase">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Introduction
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services & Rates
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
