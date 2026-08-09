"use client"

import { PRICING_TABLE, PricingPlan } from "@/data/portfolio"
import { Check, ArrowRight, ShieldCheck, Clock, FileText } from "lucide-react"

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
            Services & Commission Rates
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
            Transparent Investment & Licensing
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-sans font-light leading-relaxed">
            All assignments are handled directly by Alex Morgan with custom color grading, archival digital deliverables, and clear licensing terms tailored to your project goals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_TABLE.map((plan: PricingPlan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between p-6 sm:p-8 rounded-sm bg-card border transition-all duration-300 ${
                plan.popular
                  ? "border-foreground/60 shadow-lg relative bg-card/80"
                  : "border-border/60 hover:border-foreground/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest rounded-full">
                  Primary Assignment
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block">
                    {plan.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-foreground mt-1">
                    {plan.name}
                  </h3>
                </div>

                <div className="border-y border-border/40 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground font-sans font-light leading-snug">
                    {plan.notes}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Deliverables Included:
                  </span>
                  <ul className="space-y-2 text-xs text-foreground font-sans font-light">
                    {plan.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-border/30">
                <a
                  href="#contact"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-2.5 px-4 text-xs font-sans uppercase tracking-wider font-medium rounded-sm flex items-center justify-center gap-2 transition-colors ${
                    plan.popular
                      ? "bg-foreground text-background hover:opacity-90"
                      : "bg-muted/60 hover:bg-muted text-foreground"
                  }`}
                >
                  Inquire Package <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Terms & Licensing Note */}
        <div className="mt-12 p-6 rounded-sm bg-muted/30 border border-border/50 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-muted-foreground font-sans">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-foreground block mb-1">
                Clear Licensing
              </span>
              All rates include standard print and digital rights. Commercial expansion or global rights are quoted per usage.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-foreground block mb-1">
                Reliable Turnaround
              </span>
              Standard proofing galleries delivered within 5 business days. Express turnaround available upon request.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <div>
              <span className="font-medium text-foreground block mb-1">
                Custom Estimate
              </span>
              Projects requiring multi-city travel or custom set production receive a detailed itemized proposal.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
