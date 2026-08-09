"use client"

import { useState } from "react"
import { PHOTOS } from "@/data/portfolio"
import { X, Camera, FileText, Check, Copy, ExternalLink, Code } from "lucide-react"

interface ImageReplacementModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ImageReplacementModal({ isOpen, onClose }: ImageReplacementModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  if (!isOpen) return null

  const allPlaceholders = [
    {
      tag: "IMG_HERO_FEATURED",
      name: "Hero Featured Photograph",
      location: "components/Hero.tsx & data/portfolio.ts (photo-1)",
      currentUrl: PHOTOS[0].imageUrl,
      ratio: "3:4 Portrait",
      dimensions: "1200 x 1600 px",
      subject: "Striking architectural structure, strong geometric shadow, high contrast."
    },
    {
      tag: "IMG_BIO_PORTRAIT",
      name: "Photographer Artist Portrait",
      location: "components/IntroSection.tsx",
      currentUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      ratio: "4:5 Vertical",
      dimensions: "1000 x 1250 px",
      subject: "Quiet, natural-light portrait of the photographer in working attire or holding rangefinder camera."
    },
    ...PHOTOS.map((p) => ({
      tag: p.placeholderId,
      name: p.title,
      location: `data/portfolio.ts (${p.id})`,
      currentUrl: p.imageUrl,
      ratio: p.aspectRatio === "portrait" ? "3:4 Portrait" : p.aspectRatio === "landscape" ? "3:2 Landscape" : "1:1 Square",
      dimensions: p.recommendedDimensions,
      subject: p.description
    }))
  ]

  const copyPath = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div
      id="image-guide-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div className="bg-card text-card-foreground border border-border rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-border flex items-center justify-between bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground">
                Photographer Image Replacement Manifest
              </h3>
              <p className="text-xs font-mono text-muted-foreground mt-0.5">
                Guide for replacing placeholder photography with your own original work
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Table & Instructions */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {/* Quick instructions box */}
          <div className="p-4 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-300 space-y-2">
            <div className="font-semibold flex items-center gap-1.5 font-mono">
              <Code className="w-4 h-4" /> How to replace these images in the codebase:
            </div>
            <ol className="list-decimal list-inside space-y-1 text-[11px] font-sans leading-relaxed">
              <li>
                Place your high-resolution original image files into the <code className="font-mono bg-black/10 dark:bg-black/40 px-1 rounded">/public/images/</code> folder.
              </li>
              <li>
                Open <code className="font-mono bg-black/10 dark:bg-black/40 px-1 rounded">data/portfolio.ts</code> and update the <code className="font-mono bg-black/10 dark:bg-black/40 px-1 rounded">imageUrl</code> properties to point to <code className="font-mono bg-black/10 dark:bg-black/40 px-1 rounded">/images/your-photo-file.jpg</code>.
              </li>
              <li>
                Optionally update the title, camera EXIF details (lens, aperture, shutter speed, ISO), location, and narrative note for each photo.
              </li>
            </ol>
          </div>

          {/* Manifest Table */}
          <div className="border border-border rounded-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 font-mono text-[10px] uppercase text-muted-foreground border-b border-border">
                    <th className="p-3">Placeholder Tag</th>
                    <th className="p-3">Section / Code File</th>
                    <th className="p-3">Ratio & Recommended Size</th>
                    <th className="p-3">Suggested Subject</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-mono text-[11px]">
                  {allPlaceholders.map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-3 font-bold text-amber-600 dark:text-amber-400">
                        {item.tag}
                      </td>
                      <td className="p-3 text-muted-foreground font-sans">
                        <div className="font-medium text-foreground">{item.name}</div>
                        <div className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                          {item.location}
                          <button
                            onClick={() => copyPath(item.location, idx)}
                            className="p-0.5 hover:text-foreground"
                            title="Copy file path"
                          >
                            {copiedIndex === idx ? (
                              <Check className="w-3 h-3 text-emerald-500" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground">
                        <div className="text-foreground">{item.ratio}</div>
                        <div className="text-[10px]">{item.dimensions}</div>
                      </td>
                      <td className="p-3 text-muted-foreground font-sans max-w-xs text-[11px]">
                        {item.subject}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between">
          <span className="text-[11px] font-mono text-muted-foreground">
            Documentation also available in root <code className="text-foreground font-bold">REPLACE_IMAGES.md</code>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-foreground text-background text-xs font-sans uppercase tracking-wider font-medium rounded hover:opacity-90 transition-opacity"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  )
}
