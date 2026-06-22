export default function Predictions() {
  return (
    <section>
      <h2 className="text-2xl font-bold">Predictions</h2>
      <div className="mt-6 grid gap-4">
        <div className="card-glass p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold">USD Strength H2 2026</h4>
              <p className="text-sm text-slate-400">We expect a short USD cyclical rally led by tighter US rates relative to peers.</p>
            </div>
            <div className="text-sm text-slate-500">Confidence: High</div>
          </div>
        </div>
        <div className="card-glass p-4 rounded-lg">
          <div className="flex justify-between">
            <div>
              <h4 className="font-semibold">Credit Tightening in EM</h4>
              <p className="text-sm text-slate-400">Select EM credits will underperform; preferring sovereigns with strong FX reserves.</p>
            </div>
            <div className="text-sm text-slate-500">Confidence: Medium</div>
          </div>
        </div>
      </div>
    </section>
  )
}
