'use client'
import { motion } from 'framer-motion'

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

const stats = [
  { label: 'Research Pieces', value: '30+' },
  { label: 'Markets Covered', value: 'Crypto · Forex · DeFi' },
  { label: 'Active Since', value: '2022' },
  { label: 'Methodology', value: 'FA + TA Fusion' },
]

export default function HomePage() {
  return (
    <div className="grid-bg min-h-screen px-4 pt-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-lg mx-auto mb-10"
      >
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: '#38BDF8' }}>
          Market Intelligence Research Agent
        </p>
        <h1 className="font-display font-bold text-3xl leading-tight mb-3" style={{ color: '#E2E8F0' }}>
          Intelligence-grade research.<br />
          <span style={{ color: '#38BDF8' }}>Built for edge.</span>
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
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
