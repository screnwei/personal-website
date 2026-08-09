"use client"

import { useEffect } from "react"
import { PhotoItem, PHOTOS } from "@/data/portfolio"
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Info, Copy, Check } from "lucide-react"

interface LightboxModalProps {
  photoId: string | null
  onClose: () => void
  onSelectPhoto: (id: string) => void
}

export function LightboxModal({ photoId, onClose, onSelectPhoto }: LightboxModalProps) {
  if (!photoId) return null

  const photoIndex = PHOTOS.findIndex((p) => p.id === photoId)
  const currentPhoto = PHOTOS[photoIndex] || PHOTOS[0]

  const prevPhoto = PHOTOS[(photoIndex - 1 + PHOTOS.length) % PHOTOS.length]
  const nextPhoto = PHOTOS[(photoIndex + 1) % PHOTOS.length]

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onSelectPhoto(prevPhoto.id)
      if (e.key === "ArrowRight") onSelectPhoto(nextPhoto.id)
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [photoId, prevPhoto, nextPhoto, onClose, onSelectPhoto])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between overflow-y-auto">
      {/* Top Header Controls */}
      <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 text-white z-10">
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
          <span className="text-amber-400 font-medium">[{currentPhoto.placeholderId}]</span>
          <span>•</span>
          <span>{currentPhoto.category.toUpperCase()}</span>
          <span>•</span>
          <span>{photoIndex + 1} of {PHOTOS.length}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Lightbox View */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-4 sm:p-8 max-w-7xl mx-auto w-full">
        {/* Photo Container */}
        <div className="lg:col-span-8 relative flex items-center justify-center min-h-[50vh] max-h-[75vh]">
          {/* Nav prev */}
          <button
            onClick={() => onSelectPhoto(prevPhoto.id)}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 transition-all z-10 focus:outline-none"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <img
            src={currentPhoto.imageUrl}
            alt={currentPhoto.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-white/10"
          />

          {/* Nav next */}
          <button
            onClick={() => onSelectPhoto(nextPhoto.id)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 transition-all z-10 focus:outline-none"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* EXIF Metadata & Details Panel */}
        <div className="lg:col-span-4 text-white space-y-6 bg-white/5 p-6 rounded-md border border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              {currentPhoto.location} • {currentPhoto.year}
            </div>
            <h3 className="font-serif text-2xl font-medium tracking-tight text-white">
              {currentPhoto.title}
            </h3>
            <p className="mt-2 text-xs text-neutral-300 font-sans font-light leading-relaxed">
              {currentPhoto.description}
            </p>
          </div>

          {/* EXIF Specs Table */}
          <div className="border-t border-white/10 pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase tracking-wider">
              <Camera className="w-4 h-4 text-amber-400" />
              Technical Metadata (EXIF)
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-black/40 p-4 rounded border border-white/5">
              <div>
                <span className="text-neutral-500 block text-[10px]">CAMERA</span>
                <span className="text-neutral-200">{currentPhoto.exif.camera}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">LENS</span>
                <span className="text-neutral-200">{currentPhoto.exif.lens}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">FOCAL LENGTH</span>
                <span className="text-neutral-200">{currentPhoto.exif.focalLength}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">APERTURE</span>
                <span className="text-neutral-200">{currentPhoto.exif.aperture}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">SHUTTER SPEED</span>
                <span className="text-neutral-200">{currentPhoto.exif.shutterSpeed}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[10px]">ISO</span>
                <span className="text-neutral-200">{currentPhoto.exif.iso}</span>
              </div>
            </div>
          </div>

          {/* Photographer Image Replacement Spec */}
          <div className="border-t border-white/10 pt-4 space-y-2 text-xs font-mono text-amber-300/90">
            <div className="flex items-center gap-1.5 font-medium">
              <Info className="w-4 h-4 text-amber-400" />
              Photographer Replacement Spec
            </div>
            <div className="bg-amber-500/10 p-3 rounded border border-amber-500/20 text-[11px] space-y-1">
              <div>
                <span className="text-neutral-400">Tag ID:</span> {currentPhoto.placeholderId}
              </div>
              <div>
                <span className="text-neutral-400">Recommended Size:</span> {currentPhoto.recommendedDimensions}
              </div>
              <div>
                <span className="text-neutral-400">Aspect Ratio:</span> {currentPhoto.aspectRatio}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Navigation bar */}
      <div className="p-4 text-center text-xs font-mono text-neutral-500 border-t border-white/10">
        Use Left/Right arrow keys to navigate • Esc to exit
      </div>
    </div>
  )
}
