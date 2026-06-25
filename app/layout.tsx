import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'cwMIRA — Market Intelligence Research Agent',
  description: 'Intelligence-grade crypto and forex research by Chris Wallan. Fundamental analysis, technical setups, and market intelligence drops.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
