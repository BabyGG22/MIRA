import './globals.css'
import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Chris Wall — Market Intelligence',
  description: 'Premium research, predictions, and portfolio insights',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ink-900 text-slate-100 antialiased">
        <div className="min-h-screen bg-[linear-gradient(180deg,#07090D,rgba(6,8,10,0.65))]">
          <NavBar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
