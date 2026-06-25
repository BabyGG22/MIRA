'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="grid-bg min-h-screen px-4 pt-6">
      <div className="max-w-lg mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#38BDF8' }}>
            Connect
          </p>
          <h2 className="font-display font-bold text-2xl mb-1" style={{ color: '#E2E8F0' }}>
            Work with MIRA.
          </h2>
          <p className="text-sm mb-8" style={{ color: '#64748B' }}>
            For advisory, research collaboration, or to receive intelligence drops directly.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            {/* Contact Form */}
            <div className="card px-5 py-5 mb-4">
              <p className="font-display font-semibold text-sm mb-4" style={{ color: '#E2E8F0' }}>Send a message</p>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-[10px] uppercase tracking-widest mb-1 block" style={{ color: '#64748B' }}>Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-all"
                    style={{
                      background: 'rgba(56,189,248,0.05)',
                      border: '1px solid rgba(56,189,248,0.12)',
                      color: '#E2E8F0',
                    }}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest mb-1 block" style={{ color: '#64748B' }}>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none"
                    style={{
                      background: 'rgba(56,189,248,0.05)',
                      border: '1px solid rgba(56,189,248,0.12)',
                      color: '#E2E8F0',
                    }}
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-widest mb-1 block" style={{ color: '#64748B' }}>Message</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="What are you looking to work on?"
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
                    style={{
                      background: 'rgba(56,189,248,0.05)',
                      border: '1px solid rgba(56,189,248,0.12)',
                      color: '#E2E8F0',
                    }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-3 rounded-xl font-display font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #1B2FA8, #38BDF8)', color: '#fff' }}
                >
                  Send Message →
                </button>
              </div>
            </div>

            {/* Subscribe */}
            <div className="card px-5 py-5">
              <p className="font-display font-semibold text-sm mb-1" style={{ color: '#E2E8F0' }}>Subscribe to Intelligence Drops</p>
              <p className="text-xs mb-4" style={{ color: '#64748B' }}>
                Get fundamental and technical research delivered when it drops. No noise, no schedule — only signal.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{
                    background: 'rgba(56,189,248,0.05)',
                    border: '1px solid rgba(56,189,248,0.12)',
                    color: '#E2E8F0',
                  }}
                />
                <button
                  className="px-4 py-2 rounded-lg font-display font-semibold text-xs transition-all hover:opacity-90"
                  style={{ background: 'rgba(56,189,248,0.15)', color: '#38BDF8', border: '1px solid rgba(56,189,248,0.25)' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card px-6 py-10 text-center"
          >
            <div className="text-3xl mb-4">✦</div>
            <p className="font-display font-bold text-lg mb-2" style={{ color: '#E2E8F0' }}>Message received.</p>
            <p className="text-sm" style={{ color: '#64748B' }}>Chris will get back to you shortly.</p>
          </motion.div>
        )}

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 flex gap-3 justify-center">
          {[
            { label: 'Twitter / X', href: '#' },
            { label: 'Telegram', href: '#' },
            { label: 'LinkedIn', href: '#' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="text-[11px] font-semibold uppercase tracking-wider transition-colors hover:text-sky"
              style={{ color: '#475569' }}
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
      <div className="h-8" />
    </div>
  )
}
