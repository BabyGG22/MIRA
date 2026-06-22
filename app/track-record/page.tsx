import AnimatedChart from '../../components/AnimatedChart'

export default function TrackRecord() {
  const labels = ['2023','2024','2025','2026']
  const data = [3.2, 7.1, 12.4, 9.5]

  return (
    <section>
      <h2 className="text-2xl font-bold">Track Record</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card-glass p-6 rounded-lg">
          <div className="mb-4">
            <div className="text-sm text-slate-400">Annualized Return</div>
            <div className="text-3xl font-semibold">11.8%</div>
          </div>
          <AnimatedChart labels={labels} data={data} />
        </div>

        <div className="card-glass p-6 rounded-lg">
          <h3 className="text-lg font-semibold">Performance Attribution</h3>
          <ul className="mt-4 text-sm text-slate-300 space-y-2">
            <li>Macro strategies: +5.4%</li>
            <li>Equities: +3.1%</li>
            <li>Credit: +2.0%</li>
            <li>Costs & fees: -0.7%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
