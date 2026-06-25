'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = ['All', 'Macro', 'DeFi', 'Crypto', 'Regulatory', 'Institutional']

const featured = {
  title: 'The Institutionalization of On-Chain Finance',
  subtitle: 'How AI, Stablecoins, Tokenized Securities, Hyperliquid, Canton, Mantle & Neo-Banking Are Reshaping Global Capital Markets',
  category: 'Institutional',
  date: 'Jun 2026',
  read: '15 min',
  summary: 'The digital asset industry is undergoing its most significant structural transformation since the creation of Bitcoin. This cycle is defined by institutional adoption — blockchain evolving from a speculative ecosystem into a financial infrastructure layer. The core question is no longer whether blockchain will survive, but which networks become the settlement rails of the next generation of global finance.',
  topics: ['Stablecoins', 'Hyperliquid', 'Canton Network', 'Tokenized Securities', 'AI & Capital Markets', 'Neo-Banking'],
  link: '#',
}

const pieces = [
  {
    title: 'US FED Rates & Market Impact',
    category: 'Macro',
    date: 'Aug 25, 2023',
    summary: 'Federal Reserve rate trajectory analysis — how rate hike cycles compress crypto multiples, strengthen USD, and shift institutional risk appetite across asset classes.',
    link: '#',
    read: '7 min',
  },
  {
    title: 'FOMC Decision & Crypto Liquidity',
    category: 'Macro',
    date: 'Aug 25, 2023',
    summary: 'How FOMC decisions ripple through crypto liquidity, risk-on/off dynamics, and BTC correlation with rate expectations. Real-time read of Fed language and market reaction.',
    link: '#',
    read: '6 min',
  },
  {
    title: 'Future of LTC After Halving',
    category: 'Crypto',
    date: 'Aug 26, 2023',
    summary: 'Post-halving supply shock analysis for Litecoin — miner economics, historical precedent, and price cycle positioning.',
    link: '#',
    read: '5 min',
  },
  {
    title: 'SEC ETF Approval Postponement',
    category: 'Regulatory',
    date: 'Sep 1, 2023',
    summary: 'Regulatory intelligence on SEC delays for spot BTC ETF — legal framework, political dynamics, and market implications.',
    link: '#',
    read: '7 min',
  },
  {
    title: 'MicroStrategy News & BTC Exposure',
    category: 'Macro',
    date: 'Sep 26, 2023',
    summary: 'Corporate BTC treasury strategy deep-dive — MSTR leverage mechanics, risk profile, and institutional signal.',
    link: '#',
    read: '5 min',
  },
  {
    title: 'DeFi Article: Protocol Mechanics',
    category: 'DeFi',
    date: 'Sep 25, 2023',
    summary: 'Examining yield generation mechanisms, liquidity provision risks, and protocol sustainability in DeFi.',
    link: '#',
    read: '8 min',
  },
  {
    title: 'ETH, XRP & SOL — Comparative',
    category: 'Crypto',
    date: 'Sep 26, 2023',
    summary: 'Cross-asset fundamental comparison of three major L1s — ecosystem metrics, developer activity, and narrative positioning.',
    link: '#',
    read: '9 min',
  },
]

export default function IntelligencePage() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? pieces : pieces.filter(p => p.category === active)

  return (
    <div className="grid-bg min-h-screen px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg mx-auto"
      >
        {/* Header */}
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#38BDF8' }}>
          Intelligence
        </p>
        <h2 className="font-display font-bold text-2xl mb-1" style={{ color: '#E2E8F0' }}>
          Fundamental Analysis
        </h2>
        <p className="text-sm mb-6" style={{ color: '#64748B' }}>
          Real-time research notes on market structure, macro events, and project fundamentals.
        </p>

        {/* Featured Report */}
        <motion.a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="block no-underline mb-6 rounded-xl overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, rgba(27,47,168,0.25), rgba(56,189,248,0.08))', border: '1px solid rgba(56,189,248,0.25)' }}
        >
          <div className="px-5 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.3)' }}>
                ✦ Featured Report
              </span>
              <span className="text-[10px] uppercase tracking-wider" style={{ color: '#475569' }}>{featured.read} read</span>
            </div>
            <h3 className="font-display font-bold text-lg leading-snug mb-1 group-hover:text-sky transition-colors" style={{ color: '#E2E8F0' }}>
              {featured.title}
            </h3>
            <p className="text-xs mb-3" style={{ color: '#64748B' }}>{featured.subtitle}</p>
            <p className="text-xs leading-relaxed mb-4" style={{ color: '#94A3B8' }}>{featured.summary}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {featured.topics.map((t, i) => (
                <span key={i} className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'rgba(56,189,248,0.07)', color: '#64748B', border: '1px solid rgba(56,189,248,0.12)' }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px]" style={{ color: '#475569' }}>{featured.date}</span>
              <span className="text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ color: '#38BDF8' }}>Read Report →</span>
            </div>
          </div>
        </motion.a>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="whitespace-nowrap px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all"
              style={active === cat
                ? { background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.35)' }
                : { background: 'transparent', color: '#64748B', border: '1px solid rgba(100,116,139,0.2)' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {filtered.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="card px-5 py-4 block no-underline group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="tag">{item.category}</span>
                <span className="text-[10px] uppercase tracking-wider" style={{ color: '#475569' }}>{item.read} read</span>
              </div>
              <h3 className="font-display font-semibold text-base mb-2 group-hover:text-sky transition-colors" style={{ color: '#E2E8F0' }}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748B' }}>{item.summary}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px]" style={{ color: '#475569' }}>{item.date}</span>
                <span className="text-xs font-semibold group-hover:translate-x-1 transition-transform" style={{ color: '#38BDF8' }}>
                  Read →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
      <div className="h-8" />
    </div>
  )
}
