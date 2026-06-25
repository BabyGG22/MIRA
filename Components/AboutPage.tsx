'use client'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2022', event: 'Started publishing crypto market research and news analysis.' },
  { year: '2023', event: 'Expanded into DeFi fundamentals, tokenomics, and regulatory intelligence covering 30+ pieces.' },
  { year: '2024', event: 'Integrated AI-assisted research workflows, combining quantitative signals with narrative analysis.' },
  { year: '2025', event: 'Developed MIRA concept — fusing fundamental and technical intelligence into a unified methodology.' },
  { year: '2026', event: 'MIRA launched as a public intelligence platform for institutional-grade crypto and forex research.' },
]

export default function AboutPage() {
  return (
    <div className="grid-bg min-h-screen px-4 pt-6">
      <div className="max-w-lg mx-auto">
        {/* MIRA Section */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#38BDF8' }}>
            What is MIRA
          </p>
          <h2 className="font-display font-bold text-2xl mb-4" style={{ color: '#E2E8F0' }}>
            Market Intelligence<br />
            <span style={{ color: '#38BDF8' }}>Redefined by AI.</span>
          </h2>
          <div className="card px-5 py-5 mb-4">
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              MIRA — <strong style={{ color: '#E2E8F0' }}>Market Intelligence Research Agent</strong> — is the evolution of traditional market analysis. Where market research once meant reading reports and drawing charts separately, MIRA fuses both into a single unified intelligence layer.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#94A3B8' }}>
              Powered by AI, MIRA amplifies the analyst's edge: consuming real-time news, parsing project fundamentals, and overlaying technical structure simultaneously — the way institutional desks have always done it, now accessible to anyone with the framework.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              The result is research that doesn't just describe markets — it <strong style={{ color: '#38BDF8' }}>anticipates them</strong>.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Intelligence', desc: 'Fundamental research — news, tokenomics, protocol deep-dives, macro flow.' },
              { label: 'Trade', desc: 'Technical analysis — setups, structure, order flow, entry/exit precision.' },
              { label: 'AI-Enhanced', desc: 'Machine-speed research synthesis layered over human analytical judgment.' },
              { label: 'Cross-Market', desc: 'Crypto, Forex, DeFi — no single-market blind spots.' },
            ].map((p, i) => (
              <div key={i} className="card px-4 py-3">
                <p className="font-display font-semibold text-xs mb-1" style={{ color: '#38BDF8' }}>{p.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Builder Section */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-10">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#64748B' }}>
            The Builder
          </p>
          <div className="card px-5 py-5 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}>
                CW
              </div>
              <div>
                <p className="font-display font-semibold text-base" style={{ color: '#E2E8F0' }}>Chris Wallan</p>
                <p className="text-xs" style={{ color: '#64748B' }}>Market Intelligence Analyst · MIRA</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>
              Independent market analyst covering crypto, DeFi, and Forex with a methodology built around the intersection of fundamental intelligence and technical precision. Trading Forex with the 159 Power of Three framework while building MIRA as an open intelligence platform.
            </p>
          </div>

          {/* Timeline */}
          <p className="text-[10px] tracking-widest uppercase mb-3" style={{ color: '#475569' }}>Timeline</p>
          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 pb-4">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ background: '#38BDF8' }} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: 'rgba(56,189,248,0.15)' }} />}
                </div>
                <div className="pb-1">
                  <p className="font-display font-bold text-xs mb-0.5" style={{ color: '#38BDF8' }}>{item.year}</p>
                  <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="h-8" />
    </div>
  )
}
