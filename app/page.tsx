"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Gallery } from "@/components/Gallery"
import { IntroSection } from "@/components/IntroSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"
import { LightboxModal } from "@/components/LightboxModal"
import { ImageReplacementModal } from "@/components/ImageReplacementModal"
import { Footer } from "@/components/Footer"

export default function Home() {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null)
  const [imageGuideOpen, setImageGuideOpen] = useState(false)
  const [selectedPlanSubject, setSelectedPlanSubject] = useState("")

  const handleSelectPlan = (planName: string) => {
    setSelectedPlanSubject(planName)
    const contactElement = document.getElementById("contact")
    contactElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Fixed Navbar */}
      <Navbar onOpenImageGuide={() => setImageGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onSelectPhoto={(id) => setSelectedPhotoId(id)}
          onOpenImageGuide={() => setImageGuideOpen(true)}
        />

        <Gallery onSelectPhoto={(id) => setSelectedPhotoId(id)} />

        <IntroSection />

        <PricingSection onSelectPlan={handleSelectPlan} />

        <ContactSection initialSubject={selectedPlanSubject} />
      </main>

      {/* Footer */}
      <Footer onOpenImageGuide={() => setImageGuideOpen(true)} />

      {/* Lightbox Modal for Photos */}
      <LightboxModal
        photoId={selectedPhotoId}
        onClose={() => setSelectedPhotoId(null)}
        onSelectPhoto={(id) => setSelectedPhotoId(id)}
      />

      {/* Photographer Image Replacement Guide Modal */}
      <ImageReplacementModal
        isOpen={imageGuideOpen}
        onClose={() => setImageGuideOpen(false)}
      />
    </div>
  )
}
