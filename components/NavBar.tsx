'use client'
import { Page } from '@/app/page'

const tabs: { id: Page; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'intelligence', label: 'Intel', icon: '◎' },
  { id: 'trade', label: 'Trade', icon: '◈' },
  { id: 'about', label: 'About', icon: '⊕' },
  { id: 'contact', label: 'Connect', icon: '✦' },
]

export default function BottomNav({ current, onChange }: { current: Page; onChange: (p: Page) => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-3 py-2 rounded-2xl bg-surface border border-glow shadow-xl backdrop-blur-md"
        style={{ background: 'rgba(15,21,53,0.92)', borderColor: 'rgba(56,189,248,0.18)' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
              current === tab.id
                ? 'bg-indigo-900/60 text-sky'
                : 'text-muted hover:text-snow'
            }`}
            style={current === tab.id ? { color: '#38BDF8' } : {}}
          >
            <span className="text-base leading-none">{tab.icon}</span>
            <span className="text-[9px] font-semibold tracking-widest uppercase font-display leading-none">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
