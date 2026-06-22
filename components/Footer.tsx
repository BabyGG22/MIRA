export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between text-sm text-slate-400">
        <div>© {new Date().getFullYear()} Chris Wall</div>
        <div>Designed for Institutional Use — Bloomberg-style UI</div>
      </div>
    </footer>
  )
}
