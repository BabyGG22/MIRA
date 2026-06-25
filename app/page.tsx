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
    home: <HomePage />,
    intelligence: <IntelligencePage />,
    trade: <TradePage />,
    about: <AboutPage />,
    contact: <ContactPage />,
  }

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-void text-snow dark:bg-void dark:text-snow relative overflow-hidden font-body">
        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center bg-surface border border-indigo-800/40 text-sky text-sm hover:bg-indigo-900/40 transition-all"
          aria-label="Toggle theme"
        >
          {dark ? '☀' : '☾'}
        </button>

        {/* Logo */}
        <div className="fixed top-4 left-4 z-50">
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="text-sky">cw</span>
            <span className="text-snow">MIRA</span>
          </span>
        </div>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pb-28 pt-16 min-h-screen"
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Nav */}
        <BottomNav current={page} onChange={setPage} />
      </div>
    </div>
  )
}
