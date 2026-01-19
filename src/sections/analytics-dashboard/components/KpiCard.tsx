import React from 'react'
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface KpiCardProps {
  label: string
  value: string | number
  change: number
  prefix?: string
  suffix?: string
}

export function KpiCard({ label, value, change, prefix = '', suffix = '' }: KpiCardProps) {
  const isPositive = change > 0
  const isNeutral = change === 0

  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">{label}</p>
        <div className={cn(
          "flex items-center rounded-full px-2 py-1 text-xs font-bold",
          isNeutral ? "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400" :
          isPositive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
        )}>
          {isNeutral ? <Minus className="mr-1 h-3 w-3" /> : 
           isPositive ? <ArrowUpRight className="mr-1 h-3 w-3" /> : 
           <ArrowDownRight className="mr-1 h-3 w-3" />
          }
          {Math.abs(change)}%
        </div>
      </div>
      
      <div className="mt-4 flex items-baseline">
        <span className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
        </span>
      </div>
      
      {/* Decorative gradient blob */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/5 blur-2xl transition-all group-hover:bg-violet-500/10 dark:bg-violet-500/10 dark:group-hover:bg-violet-500/20" />
    </div>
  )
}
