"use client"

import { PHOTOGRAPHER_INFO, PHOTOS } from "@/data/portfolio"
import { ArrowDown, Camera, MapPin, SlidersHorizontal } from "lucide-react"

interface HeroProps {
  onSelectPhoto: (photoId: string) => void
  onOpenImageGuide: () => void
}

export function Hero({ onSelectPhoto, onOpenImageGuide }: HeroProps) {
  const featuredPhoto = PHOTOS[0] // Architectural feature

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-muted/30 text-[11px] font-mono tracking-wider text-muted-foreground uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {PHOTOGRAPHER_INFO.location} • Available for Commissions
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-foreground">
              Observation of space, <br />
              <span className="italic font-light opacity-90">light, & structural harmony</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl font-sans font-light leading-relaxed">
              {PHOTOGRAPHER_INFO.philosophy}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 bg-foreground text-background font-sans text-xs uppercase tracking-widest font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border bg-background hover:bg-muted/50 font-sans text-xs uppercase tracking-widest font-medium rounded-sm transition-colors text-foreground"
              >
                Inquire Commission
              </a>
              <button
                onClick={onOpenImageGuide}
                className="px-4 py-3 text-xs font-mono text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1.5"
              >
                <Camera className="w-3.5 h-3.5" />
                Image Placement Guide
              </button>
            </div>

            {/* Quick stats strip */}
            <div className="pt-8 border-t border-border/40 grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-serif text-2xl font-normal text-foreground">10+</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-sans">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl font-normal text-foreground">2</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-sans">
                  Studios (Paris / Tokyo)
                </div>
              </div>
              <div>
                <div className="font-serif text-2xl font-normal text-foreground">Medium Format</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-sans">
                  Leica & Hasselblad
                </div>
              </div>
            </div>
          </div>

          {/* Hero Featured Photograph */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Photo Frame Container */}
              <div
                onClick={() => onSelectPhoto(featuredPhoto.id)}
                className="cursor-pointer relative overflow-hidden rounded-sm bg-neutral-900 aspect-[3/4] border border-border/60 shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
              >
                <img
                  src={featuredPhoto.imageUrl}
                  alt={featuredPhoto.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Photo info bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {featuredPhoto.location}
                    </span>
                    <span>{featuredPhoto.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-white">
                    {featuredPhoto.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400 pt-1 border-t border-white/10">
                    <span>{featuredPhoto.exif.camera}</span>
                    <span>•</span>
                    <span>{featuredPhoto.exif.focalLength}</span>
                    <span>•</span>
                    <span>{featuredPhoto.exif.aperture}</span>
                  </div>
                </div>

                {/* Placeholder Replacement Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-amber-500/30">
                  Placeholder: {featuredPhoto.placeholderId}
                </div>
              </div>

              <div className="mt-2 text-right">
                <span className="text-[11px] font-mono text-muted-foreground">
                  Click image to expand EXIF & Lightbox
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
