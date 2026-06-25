'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SYMBOLS = ['$', '€', '£', '¥', '₿', '◈', 'Ξ', '₮', '%', '▲', '▼']

function FallingSymbol({ symbol, x, delay, duration }: { symbol: string; x: number; delay: number; duration: number }) {
  return (
    <motion.span
      className="absolute top-0 font-display font-bold pointer-events-none select-none"
      style={{ left: `${x}%`, fontSize: Math.random() * 12 + 10, color: '#38BDF8', opacity: 0 }}
      animate={{ y: ['0vh', '110vh'], opacity: [0, 0.04, 0.04, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    >
      {symbol}
    </motion.span>
  )
}

const setups = [
  {
    pair: 'BTC/USD',
    type: 'Long',
    timeframe: 'D1',
    bias: 'Bullish',
    entry: '$58,200',
    target: '$67,000',
    stop: '$54,800',
    rr: '2.5R',
    note: 'Break and retest of weekly structure. Accumulation range confirmed. Waiting for 4H close above $59,400.',
    date: 'Jun 2026',
  },
  {
    pair: 'ETH/USD',
    type: 'Long',
    timeframe: 'H4',
    bias: 'Bullish',
    entry: '$3,100',
    target: '$3,650',
    stop: '$2,950',
    rr: '3.1R',
    note: 'OB mitigation on H4. Strong order flow divergence. Target aligns with September 2023 liquidity pool.',
    date: 'Jun 2026',
  },
  {
    pair: 'EUR/USD',
    type: 'Short',
    timeframe: 'H1',
    bias: 'Bearish',
    entry: '1.0842',
    target: '1.0720',
    stop: '1.0890',
    rr: '2.5R',
    note: '159 PoT setup. 4:59 ET session kill zone. Premium array rejection with displacement. Targeting discount FVG fill.',
    date: 'Jun 2026',
  },
]

export default function TradePage() {
  const [symbols, setSymbols] = useState<{ symbol: string; x: number; delay: number; duration: number }[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 18 }, (_, i) => ({
      symbol: SYMBOLS[i % SYMBOLS.length],
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 10,
    }))
    setSymbols(generated)
  }, [])

  return (
    <div className="grid-bg min-h-screen px-4 pt-6 relative overflow-hidden">
      {/* Falling symbols ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {symbols.map((s, i) => (
          <FallingSymbol key={i} {...s} />
        ))}
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#38BDF8' }}>
            Trade
          </p>
          <h2 className="font-display font-bold text-2xl mb-1" style={{ color: '#E2E8F0' }}>
            Technical Setups
          </h2>
          <p className="text-sm mb-6" style={{ color: '#64748B' }}>
            Live trade ideas and chart setups across Forex and Crypto markets.
          </p>
        </motion.div>

        {/* Setup Cards */}
        <div className="flex flex-col gap-4">
          {setups.map((setup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card px-5 py-4"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-base" style={{ color: '#E2E8F0' }}>{setup.pair}</span>
                  <span className="tag">{setup.timeframe}</span>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={setup.type === 'Long'
                    ? { background: 'rgba(34,197,94,0.1)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.2)' }
                    : { background: 'rgba(239,68,68,0.1)', color: '#EF4444', border: '1px solid rgba(239,68,68,0.2)' }
                  }
                >
                  {setup.type}
                </span>
              </div>

              {/* Price levels */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: 'Entry', val: setup.entry },
                  { label: 'Target', val: setup.target },
                  { label: 'Stop', val: setup.stop },
                ].map((item, j) => (
                  <div key={j} className="rounded-lg px-3 py-2" style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.08)' }}>
                    <p className="text-[9px] uppercase tracking-widest mb-1" style={{ color: '#475569' }}>{item.label}</p>
                    <p className="font-display font-semibold text-xs" style={{ color: '#E2E8F0' }}>{item.val}</p>
                  </div>
                ))}
              </div>

              {/* Note */}
              <p className="text-xs leading-relaxed mb-3" style={{ color: '#64748B' }}>{setup.note}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-[10px]" style={{ color: '#475569' }}>{setup.date}</span>
                <span className="font-display font-bold text-xs" style={{ color: '#38BDF8' }}>R:R {setup.rr}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="h-8" />
    </div>
  )
}
