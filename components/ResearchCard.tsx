'use client'
import { motion } from 'framer-motion'

export default function ResearchCard({ title, excerpt, date, tag }: { title: string, excerpt: string, date: string, tag?: string }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card-glass p-5 rounded-lg shadow-md border border-white/4"
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {tag && <div className="text-xs bg-white/3 px-2 py-1 rounded text-slate-200">{tag}</div>}
      </div>
      <p className="text-sm text-slate-300 mt-3 line-clamp-3">{excerpt}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
        <span>{date}</span>
        <a className="text-accent-400 hover:underline" href="#">Read →</a>
      </div>
    </motion.article>
  )
}
