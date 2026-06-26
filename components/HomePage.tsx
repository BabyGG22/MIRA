'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

type Page = 'home' | 'intelligence' | 'trade' | 'about' | 'contact'

const stats = [
  { label: 'Research Pieces', value: '30+' },
  { label: 'Markets Covered', value: 'Crypto · Forex · DeFi' },
  { label: 'Active Since', value: '2022' },
  { label: 'Methodology', value: 'FA + TA Fusion' },
]

const slides = [
  {
    id: 0,
    tag: 'Market Intelligence Research Agent',
    heading: 'Where fundamental depth meets technical precision.',
    sub: 'cwMIRA is an AI-enhanced intelligence platform built for analysts, traders, and institutions who demand edge — not noise.',
    cta: null,
    page: null,
  },
  {
    id: 1,
    tag: 'Track Record',
    heading: '30+ research pieces. 4 years of documented edge.',
    sub: 'From XRP regulatory analysis to tokenomics frameworks and macro FED impact — every thesis published, timestamped, verifiable.',
    cta: 'View Archive ↓',
    page: 'scroll',
  },
  {
    id: 2,
    tag: 'Intelligence',
    heading: 'Fundamental analysis that moves before the market does.',
    sub: 'Real-time project research, macro intelligence, and institutional flow analysis — all in one feed.',
    cta: 'Open Intel →',
    page: 'intelligence',
  },
  {
    id: 3,
    tag: 'Trade',
    heading: 'Technical setups with thesis-grade conviction.',
    sub: 'Live trade ideas across Forex and Crypto — entry, target, stop, and the full reasoning behind every position.',
    cta: 'See Setups →',
    page: 'trade',
  },
  {
    id: 4,
    tag: 'Connect',
    heading: 'Work with MIRA directly.',
    sub: 'For advisory, research collaboration, or intelligence drops delivered to you — reach out or subscribe.',
    cta: 'Get in Touch →',
    page: 'contact',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Read Intelligence',
    desc: 'Start with the Intel feed — fundamental research on projects, macro events, and institutional flows. Each piece is a standalone thesis, not a summary.',
    icon: '◎',
    page: 'intelligence',
  },
  {
    step: '02',
    title: 'Study the Trade',
    desc: 'Cross-reference with the Trade section — technical setups built on top of the fundamental read. Entry, target, stop, and a full written thesis per position.',
    icon: '◈',
    page: 'trade',
  },
  {
    step: '03',
    title: 'Connect and Deploy',
    desc: 'Subscribe to intelligence drops or reach out directly for advisory. No noise, no schedule — only signal when it matters.',
    icon: '✦',
    page: 'contact',
  },
]

const trackRecord = [
  {
    title: 'XRP Analysis',
    category: 'Crypto',
    date: 'Sep 27, 2023',
    summary: 'Deep-dive into XRP regulatory positioning, Ripple vs SEC implications, and price structure analysis.',
    link: 'https://docs.google.com/document/d/your-xrp-doc-id',
    tag: 'Fundamental',
  },
  {
    title: 'Chainlink CCIP Explained',
    category: 'DeFi',
    date: 'Sep 5, 2023',
    summary: "Breakdown of Chainlink's Cross-Chain Interoperability Protocol — architecture, use cases, and market impact.",
    link: 'https://docs.google.com/document/d/your-ccip-doc-id',
    tag: 'Research',
  },
  {
    title: 'Tokenomics in Cryptocurrency',
    category: 'Macro',
    date: 'Aug 28, 2023',
    summary: 'Framework for evaluating token supply mechanics, emission schedules, and their price implications.',
    link: 'https://docs.google.com/document/d/your-tokenomics-doc-id',
    tag: 'Fundamental',
  },
  {
    title: 'Solana Analysis',
    category: 'Crypto',
    date: 'Sep 27, 2023',
    summary: 'Technical and fundamental assessment of Solana ecosystem health, validator dynamics, and growth catalysts.',
    link: 'https://docs.google.com/document/d/your-sol-doc-id',
    tag: 'Analysis',
  },
  {
    title: 'Grayscale & Crypto Markets',
    category: 'Macro',
    date: 'Aug 30, 2023',
    summary: "Grayscale's influence on BTC price discovery, GBTC discount mechanics, and institutional flow implications.",
    link: 'https://docs.google.com/document/d/your-grayscale-doc-id',
    tag: 'Macro',
  },
]

function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    const nodes = Array.from({ length: 24 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(56,189,248,${0.07 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(56,189,248,0.2)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function HomePage({ onNavigate }: { onNavigate?: (p: Page) => void }) {
  const [slide, setSlide] = useState(0)
  const archiveRef = useRef<HTMLDivElement>(null)
  const TOTAL = slides.length

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % TOTAL), 4200)
    return () => clearInterval(t)
  }, [TOTAL])

  const handleCta = (page: string | null) => {
    if (!page) return
    if (page === 'scroll') {
      archiveRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (onNavigate) {
      onNavigate(page as Page)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: '#07071A' }}>

      {/* HERO */}
      <div className="relative overflow-hidden" style={{ minHeight: 480 }}>
        <TechBackground />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 55% at 50% 35%, rgba(27,47,168,0.2) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 px-5 pt-14 pb-6 flex flex-col" style={{ minHeight: 480 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32 }}
              className="flex-1"
            >
              <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: '#38BDF8', fontFamily: 'Inter, sans-serif' }}>
                {slides[slide].tag}
              </p>
              <h1 className="font-bold leading-snug mb-3"
                style={{ fontSize: 26, color: '#E2E8F0', fontFamily: "'Times New Roman', Times, serif" }}>
                {slides[slide].heading}
              </h1>
              <p className="text-sm leading-relaxed mb-5"
                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>
                {slides[slide].sub}
              </p>
              {slides[slide].cta && (
                <button
                  onClick={() => handleCta(slides[slide].page)}
                  className="text-xs font-bold tracking-wider px-4 py-2 rounded-lg transition-all active:scale-95"
                  style={{
                    background: 'rgba(56,189,248,0.12)',
                    color: '#38BDF8',
                    border: '1px solid rgba(56,189,248,0.3)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {slides[slide].cta}
                </button>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto pt-6">
            {/* Slide dots */}
            <div className="flex gap-1.5 mb-5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === slide ? 22 : 6,
                    height: 6,
                    background: i === slide ? '#38BDF8' : 'rgba(56,189,248,0.2)',
                  }}
                />
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2">
              {stats.map((s, i) => (
                <div key={i} className="rounded-xl px-3 py-2.5"
                  style={{ background: 'rgba(15,21,53,0.85)', border: '1px solid rgba(56,189,248,0.1)' }}>
                  <p className="text-[9px] tracking-widest uppercase mb-0.5"
                    style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{s.label}</p>
                  <p className="font-bold text-xs"
                    style={{ color: '#38BDF8', fontFamily: "'Times New Roman', Times, serif" }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="px-5 py-10" style={{ borderTop: '1px solid rgba(56,189,248,0.08)' }}>
        <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-1"
          style={{ color: '#38BDF8', fontFamily: 'Inter, sans-serif' }}>How It Works</p>
        <h2 className="font-bold text-xl mb-7"
          style={{ color: '#E2E8F0', fontFamily: "'Times New Roman', Times, serif" }}>
          Three steps. One edge.
        </h2>

        <div className="flex flex-col gap-3">
          {howItWorks.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => onNavigate && onNavigate(item.page as Page)}
              className="rounded-xl px-4 py-4 cursor-pointer group"
              style={{ background: 'rgba(15,21,53,0.7)', border: '1px solid rgba(56,189,248,0.1)' }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(56,189,248,0.1)', color: '#38BDF8', fontSize: 16 }}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase"
                      style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{item.step}</span>
                    <span className="font-bold text-sm"
                      style={{ color: '#E2E8F0', fontFamily: "'Times New Roman', Times, serif" }}>{item.title}</span>
                  </div>
                  <p className="text-xs leading-relaxed"
                    style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRACK RECORD */}
      <div ref={archiveRef} className="px-5 pb-10" style={{ borderTop: '1px solid rgba(56,189,248,0.08)' }}>
        <div className="flex items-center justify-between pt-6 mb-5">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-0.5"
              style={{ color: '#38BDF8', fontFamily: 'Inter, sans-serif' }}>Research Archive</p>
            <h2 className="font-bold text-xl"
              style={{ color: '#E2E8F0', fontFamily: "'Times New Roman', Times, serif" }}>Track Record</h2>
          </div>
          <span style={{ color: 'rgba(56,189,248,0.35)', fontSize: 22 }}>↓</span>
        </div>

        <div className="flex flex-col gap-3">
          {trackRecord.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="block no-underline group rounded-xl px-5 py-4"
              style={{ background: 'rgba(15,21,53,0.7)', border: '1px solid rgba(56,189,248,0.1)' }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: 'rgba(56,189,248,0.1)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.2)', fontFamily: 'Inter, sans-serif' }}>
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-base leading-snug"
                    style={{ color: '#E2E8F0', fontFamily: "'Times New Roman', Times, serif" }}>{item.title}</h3>
                </div>
                <span className="text-lg group-hover:translate-x-1 transition-transform mt-1" style={{ color: '#38BDF8' }}>→</span>
              </div>
              <p className="text-xs leading-relaxed mb-3"
                style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}>{item.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider"
                  style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{item.category}</span>
                <span className="text-[10px]"
                  style={{ color: '#475569', fontFamily: 'Inter, sans-serif' }}>{item.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="h-6" />
    </div>
  )
}
          A curated archive of market research spanning crypto, DeFi, and macro — combining fundamental depth with technical precision.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="max-w-lg mx-auto grid grid-cols-2 gap-2 mb-10"
      >
        {stats.map((s, i) => (
          <div key={i} className="card px-4 py-3">
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: '#64748B' }}>{s.label}</p>
            <p className="font-display font-semibold text-sm" style={{ color: '#38BDF8' }}>{s.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Track Record */}
      <div className="max-w-lg mx-auto">
        <p className="text-[10px] tracking-[0.18em] uppercase font-semibold mb-4" style={{ color: '#64748B' }}>
          Track Record · Research Archive
        </p>
        <div className="flex flex-col gap-3">
          {trackRecord.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="card px-5 py-4 block no-underline group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="tag mb-2 inline-block">{item.tag}</span>
                  <h3 className="font-display font-semibold text-base leading-snug" style={{ color: '#E2E8F0' }}>
                    {item.title}
                  </h3>
                </div>
                <span className="text-lg group-hover:translate-x-1 transition-transform mt-1" style={{ color: '#38BDF8' }}>→</span>
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748B' }}>{item.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-wider uppercase" style={{ color: '#475569' }}>{item.category}</span>
                <span className="text-[10px]" style={{ color: '#475569' }}>{item.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="h-8" />
    </div>
  )
}
