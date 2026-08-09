"use client"

import { PHOTOGRAPHER_INFO, FOCUS_AREAS } from "@/data/portfolio"
import { Compass, Camera, Sparkles, Award, MapPin } from "lucide-react"

export function IntroSection() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Photographer Bio */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Introduction
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
                About the Photographer
              </h2>
            </div>

            {/* Profile image container with placeholder tag */}
            <div className="relative rounded-sm overflow-hidden border border-border bg-neutral-900 aspect-[4/5] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
                alt="Alex Morgan"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-amber-300 border border-amber-500/30">
                Placeholder: IMG_BIO_PORTRAIT (1000x1250)
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-mono">
                <div className="font-serif text-lg text-white font-medium">Alex Morgan</div>
                <div className="text-neutral-300">Paris & Tokyo Studios</div>
              </div>
            </div>

            <div className="space-y-4 font-sans font-light text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>{PHOTOGRAPHER_INFO.bio}</p>
              <p>
                My work spans commissioned assignments for international architectural practices, cultural institutions, and private art collectors. Every series is approached with rigorous attention to ambient light, shadow depth, and natural perspective.
              </p>
            </div>
          </div>

          {/* Right Column - Specializations & Exhibitions */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Specializations & Focus Areas
              </div>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground mb-6">
                Core Domains of Practice
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {FOCUS_AREAS.map((area) => (
                  <div
                    key={area.code}
                    className="p-6 rounded-sm bg-card border border-border/60 hover:border-foreground/30 transition-colors space-y-3"
                  >
                    <div className="text-xs font-mono text-muted-foreground tracking-widest">
                      [{area.code}]
                    </div>
                    <h4 className="font-serif text-lg font-medium text-foreground">
                      {area.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-sans font-light leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Exhibitions & Monographs */}
            <div className="pt-8 border-t border-border/40">
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Recognition & Exhibitions
              </div>
              <h3 className="font-serif text-xl font-normal tracking-tight text-foreground mb-4">
                Selected Group & Solo Exhibitions
              </h3>

              <div className="space-y-3 font-mono text-xs text-muted-foreground">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-border/30">
                  <span className="text-foreground font-sans font-medium">
                    "Geometric Horizons" — Galerie des Beaux-Arts
                  </span>
                  <span>Paris, 2024</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-border/30">
                  <span className="text-foreground font-sans font-medium">
                    "Tokyo Twilight: Urban Structure" — AXIS Gallery
                  </span>
                  <span>Tokyo, 2023</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-border/30">
                  <span className="text-foreground font-sans font-medium">
                    "Architectural Monologue" — Monograph Publication
                  </span>
                  <span>Hatje Cantz, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
