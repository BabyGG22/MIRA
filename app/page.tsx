'use client'
import { useState, useEffect } from 'react'
import HomePage from '../components/HomePage'
import IntelligencePage from '../components/IntelligencePage'
import TradePage from '../components/TradePage'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import BottomNav from '../components/BottomNav'
import { motion, AnimatePresence } from 'framer-motion'

export type Page = 'home' | 'intelligence' | 'trade' | 'about' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const pages: Record<Page, React.ReactNode> = {
    home: <HomePage onNavigate={setPage} />,
    intelligence: <IntelligencePage />,
    trade: <TradePage />,
    about: <AboutPage />,
    contact: <ContactPage />,
  }

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen relative overflow-hidden" style={{ background: '#07071A', color: '#E2E8F0' }}>

        {/* Theme toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all"
          style={{ background: 'rgba(15,21,53,0.9)', border: '1px solid rgba(56,189,248,0.2)', color: '#38BDF8' }}
          aria-label="Toggle theme"
        >
          {dark ? '☀' : '☾'}
        </button>

        {/* Logo */}
        <div className="fixed top-4 left-4 z-50">
          <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: '#38BDF8' }}>cw</span>
            <span style={{ color: '#E2E8F0' }}>MIRA</span>
          </span>
        </div>

        {/* Page content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="pb-28 pt-14"
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>

        <BottomNav current={page} onChange={setPage} />
      </div>
    </div>
  )
}
