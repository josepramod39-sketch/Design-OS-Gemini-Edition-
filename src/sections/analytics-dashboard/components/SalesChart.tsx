import React from 'react'
import type { SalesTrend } from '@/../product/sections/analytics-dashboard/types'

interface SalesChartProps {
  data: SalesTrend[]
  height?: number
}

export function SalesChart({ data, height = 300 }: SalesChartProps) {
  // Simple SVG Chart implementation for portability
  const padding = 40
  const chartWidth = 1000 // Normalized width
  const chartHeight = height
  
  const maxVal = Math.max(...data.map(d => Math.max(d.revenue, d.cost))) * 1.1 // 10% padding top
  
  const getX = (index: number) => padding + (index / (data.length - 1)) * (chartWidth - padding * 2)
  const getY = (val: number) => chartHeight - padding - (val / maxVal) * (chartHeight - padding * 2)
  
  const revenuePoints = data.map((d, i) => `${getX(i)},${getY(d.revenue)}`).join(' ')
  const costPoints = data.map((d, i) => `${getX(i)},${getY(d.cost)}`).join(' ')
  
  // Area paths
  const revenueArea = `${getX(0)},${chartHeight - padding} ${revenuePoints} ${getX(data.length - 1)},${chartHeight - padding}`
  
  return (
    <div className="w-full overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">Revenue vs Costs</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Daily performance over last period</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-violet-500" />
            <span className="text-zinc-600 dark:text-zinc-300">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-zinc-600 dark:text-zinc-300">Costs</span>
          </div>
        </div>
      </div>
      
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <svg 
          viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const y = chartHeight - padding - tick * (chartHeight - padding * 2)
            return (
              <g key={tick}>
                <line 
                  x1={padding} 
                  y1={y} 
                  x2={chartWidth - padding} 
                  y2={y} 
                  stroke="currentColor" 
                  strokeOpacity="0.1" 
                  className="text-zinc-500"
                  strokeDasharray="4 4"
                />
                <text 
                  x={padding - 10} 
                  y={y + 4} 
                  textAnchor="end" 
                  className="fill-zinc-400 text-[10px] font-mono"
                >
                  ${Math.round(tick * maxVal)}
                </text>
              </g>
            )
          })}

          {/* Revenue Area (Gradient) */}
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-violet-500" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-violet-500" />
            </linearGradient>
          </defs>
          <path d={revenueArea} fill="url(#revenueGradient)" />
          
          {/* Lines */}
          <polyline 
            points={revenuePoints} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-violet-600 dark:text-violet-400" 
          />
           <polyline 
            points={costPoints} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400 dark:text-zinc-600" 
            strokeDasharray="6 4"
          />
        </svg>
      </div>
    </div>
  )
}
