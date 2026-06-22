'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const items = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/predictions', label: 'Predictions' },
    { href: '/track-record', label: 'Track Record' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]
  return (
    <header className="border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-accent-400 font-semibold tracking-wide">CW</div>
          <div>
            <div className="text-sm font-semibold">Chris Wall</div>
            <div className="text-xs text-slate-400">Portfolio Manager · Market Research</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="text-sm text-slate-200 hover:text-white transition">
              {it.label}
            </Link>
          ))}
          <a className="ml-2 px-3 py-1 rounded bg-accent-500 text-black text-sm font-medium" href="/contact">Subscribe</a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="p-2 rounded bg-white/3">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            {items.map((it) => (
              <Link key={it.href} href={it.href} className="text-slate-200 py-2">
                {it.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
