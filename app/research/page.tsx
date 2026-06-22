import ResearchCard from '../../components/ResearchCard'

export default function ResearchPage() {
  const items = new Array(8).fill(0).map((_, i) => ({
    title: `Research Note ${i + 1}`,
    excerpt: `Summary paragraph with top-line theses and trade ideas for note ${i + 1}.`,
    date: `Jun ${i + 1}, 2026`,
    tag: i % 2 === 0 ? 'Macro' : 'Equity'
  }))

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Research</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <ResearchCard key={idx} title={it.title} excerpt={it.excerpt} date={it.date} tag={it.tag} />
        ))}
      </div>
    </section>
  )
}
