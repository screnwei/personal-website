"use client"

import { useState } from "react"
import { PHOTOGRAPHER_INFO } from "@/data/portfolio"
import { Mail, Phone, MapPin, Send, Copy, Check, ArrowUpRight } from "lucide-react"

interface ContactSectionProps {
  initialSubject?: string
}

export function ContactSection({ initialSubject = "" }: ContactSectionProps) {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: initialSubject || "Architectural Commission",
    timeline: "",
    message: ""
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(PHOTOGRAPHER_INFO.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Email Highlight */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
                Get in Touch
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                Let&apos;s Discuss Your Project
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground font-sans font-light leading-relaxed">
              Available for architectural commissions, publication feature assignments, and fine art inquiries across Europe and Asia.
            </p>

            {/* Featured Easy-to-find Email Card */}
            <div className="p-6 rounded-sm bg-card border border-border shadow-xs space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>DIRECT EMAIL INQUIRIES</span>
                <Mail className="w-4 h-4 text-foreground" />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <a
                  href={`mailto:${PHOTOGRAPHER_INFO.email}`}
                  className="font-serif text-xl sm:text-2xl font-medium text-foreground hover:underline truncate"
                >
                  {PHOTOGRAPHER_INFO.email}
                </a>

                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-muted hover:bg-muted/80 text-foreground transition-colors shrink-0 flex items-center gap-1.5 focus:outline-none"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] font-mono text-muted-foreground pt-2 border-t border-border/40">
                Average response time: within 24 hours
              </div>
            </div>

            {/* Studio Locations */}
            <div className="space-y-4 pt-4 border-t border-border/40">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Studio Locations
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                {PHOTOGRAPHER_INFO.studios.map((studio, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-serif text-base text-foreground font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      {studio.city}
                    </span>
                    <p className="text-muted-foreground text-[11px] font-light">
                      {studio.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-border/40">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                Connect & Follow
              </div>
              <div className="flex items-center gap-4">
                {PHOTOGRAPHER_INFO.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                  >
                    {social.name} <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-card p-6 sm:p-10 rounded-sm border border-border/60 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-foreground">
                  Inquiry Received
                </h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto font-sans font-light leading-relaxed">
                  Thank you for reaching out. Alex Morgan will review your commission request and reply to <strong className="text-foreground">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono text-muted-foreground hover:text-foreground underline focus:outline-none"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-foreground">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans font-light mt-1">
                    Fill out the fields below to request project estimates or scheduling availability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-muted-foreground block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-muted-foreground block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@architecture-studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-muted-foreground block">
                      Assignment Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-background border border-border focus:border-foreground focus:outline-none transition-colors text-foreground"
                    >
                      <option value="Architectural Commission">Architectural & Spatial Commission</option>
                      <option value="Editorial & Portraiture">Editorial & Portraiture Session</option>
                      <option value="Fine Art Prints">Limited Edition Fine Art Prints</option>
                      <option value="Archive Licensing">Archive Image Licensing</option>
                      <option value="General Inquiry">General / Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-muted-foreground block">
                      Target Schedule / Dates
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Q3 2026 / October"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-muted-foreground block">
                    Project Details & Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the location, architectural scope, intended usage, or any specific visual requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs font-sans rounded-sm bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-foreground text-background font-sans text-xs uppercase tracking-widest font-medium rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Send Project Inquiry <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
