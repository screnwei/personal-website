"use client"

import { useState } from "react"
import { PHOTOS, PhotoItem } from "@/data/portfolio"
import { MapPin, SlidersHorizontal, Eye, Maximize2, Camera } from "lucide-react"

interface GalleryProps {
  onSelectPhoto: (photoId: string) => void
}

export function Gallery({ onSelectPhoto }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [layoutMode, setLayoutMode] = useState<"masonry" | "grid">("masonry")

  const categories = [
    { key: "all", label: "Selected Works" },
    { key: "architecture", label: "Architecture" },
    { key: "portraits", label: "Portraits" },
    { key: "landscapes", label: "Landscapes" },
    { key: "street", label: "Street & Twilight" }
  ]

  const filteredPhotos =
    selectedCategory === "all"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === selectedCategory)

  return (
    <section id="work" className="py-20 md:py-28 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
              Portfolio Selection
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
              Selected Photographs
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b md:border-b-0 border-border pb-4 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider rounded-full transition-all focus:outline-none ${
                  selectedCategory === cat.key
                    ? "bg-foreground text-background font-medium"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photography Grid */}
        <div
          className={`grid gap-6 ${
            layoutMode === "masonry"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo.id)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-neutral-900 border border-border/40 transition-all duration-300 hover:shadow-xl"
            >
              {/* Photo Image with Aspect Ratio */}
              <div
                className={`w-full overflow-hidden ${
                  photo.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : photo.aspectRatio === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Darkening & Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                {/* Top bar: Category and placeholder ID */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-white">
                    {photo.category}
                  </span>
                  <span className="text-[10px] font-mono text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-amber-500/30">
                    {photo.placeholderId}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="space-y-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center text-xs font-mono text-neutral-300">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{photo.location}</span>
                    <span className="mx-2">•</span>
                    <span>{photo.year}</span>
                  </div>

                  <h3 className="font-serif text-xl font-medium tracking-tight">
                    {photo.title}
                  </h3>

                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-2 border-t border-white/10">
                    <span>
                      {photo.exif.camera} • {photo.exif.focalLength}
                    </span>
                    <span className="flex items-center gap-1 text-white hover:underline">
                      <Maximize2 className="w-3.5 h-3.5" /> Expand
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Static Caption Below Card for Non-hover state */}
              <div className="p-4 bg-card flex items-center justify-between text-xs text-muted-foreground border-t border-border/30">
                <span className="font-serif text-sm font-medium text-foreground truncate">
                  {photo.title}
                </span>
                <span className="font-mono text-[10px] uppercase text-muted-foreground ml-2">
                  {photo.location.split(",")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for photographer regarding image replacement */}
        <div className="mt-12 p-4 rounded-md border border-amber-500/30 bg-amber-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-amber-900 dark:text-amber-300">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 shrink-0 text-amber-600 dark:text-amber-400" />
            <span>
              All photography shown above uses high-resolution Unsplash placeholders with tagged IDs (e.g. IMG_ARCH_01).
            </span>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById("image-guide-modal")
              element?.classList.remove("hidden")
            }}
            className="underline hover:opacity-80 shrink-0"
          >
            View Replacement Manifest →
          </a>
        </div>
      </div>
    </section>
  )
}
