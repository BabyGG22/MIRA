import AnimatedChart from '../components/AnimatedChart'
import ResearchCard from '../components/ResearchCard'

export default function Home() {
  // demo dataset
  const labels = ['2026-01-01','2026-02-01','2026-03-01','2026-04-01','2026-05-01','2026-06-01']
  const data = [0, 2.3, 5.1, 4.0, 7.2, 9.5]

  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <div className="card-glass p-6 rounded-lg">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h1 className="text-3xl font-bold">Market Intelligence & Strategies</h1>
                <p className="text-slate-400 mt-1">Proprietary research and real-time market dashboards for institutional allocators.</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-slate-400">AUM</div>
                <div className="text-2xl font-semibold">USD 1.2B</div>
              </div>
            </div>
            <div className="mt-6">
              <AnimatedChart labels={labels} data={data} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResearchCard title="Macro Q2 Outlook" excerpt="Inflation breakevens and curve steepeners..." date="Jun 17, 2026" tag="Macro" />
            <ResearchCard title="Equity Factor Rotation" excerpt="Low volatility exposures show relative strength..." date="Jun 10, 2026" tag="Equities" />
            <ResearchCard title="Credit Spreads Strategy" excerpt="Opportunistic pockets in EM and IG..." date="May 28, 2026" tag="Credit" />
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-glass p-4 rounded-lg">
            <h4 className="text-sm text-slate-300">Market Dashboard</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="p-2 rounded bg-black/20">
                <div className="text-xs text-slate-400">S&P 500</div>
                <div className="font-semibold">4,550 <span className="text-green-400 text-sm">+0.8%</span></div>
              </div>
              <div className="p-2 rounded bg-black/20">
                <div className="text-xs text-slate-400">USD/EUR</div>
                <div className="font-semibold">1.08 <span className="text-red-400 text-sm">-0.2%</span></div>
              </div>
            </div>
          </div>

          <div className="card-glass p-4 rounded-lg">
            <h4 className="text-sm text-slate-300">Quick Links</h4>
            <ul className="mt-3 text-sm text-slate-400">
              <li>Latest Research</li>
              <li>Subscriber Notes</li>
              <li>Strategy Decks</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
