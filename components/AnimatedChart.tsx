'use client'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, TimeScale } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import 'chartjs-adapter-date-fns'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, TimeScale)

export default function AnimatedChart({ labels, data }: { labels: string[]; data: number[] }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Strategy P&L',
        data,
        borderColor: '#00B8D4',
        backgroundColor: 'rgba(0,184,212,0.1)',
        tension: 0.2,
        pointRadius: 0,
        fill: true
      }
    ]
  }

  const options = {
    responsive: true,
    interaction: { mode: 'index' as const, intersect: false },
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: true, ticks: { color: '#94A3B8' } }
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="w-full h-full">
      <Line data={chartData} options={options} />
    </motion.div>
  )
}
