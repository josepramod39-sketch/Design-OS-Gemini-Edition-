import React, { useState } from 'react'
import { 
  Zap, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  X, 
  ArrowRight, 
  Package,
  Clock 
} from 'lucide-react'
import type { Insight, InsightType } from '../types'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface InsightCardProps {
  insight: Insight
  onAction?: (insightId: string, action: any) => void
  onDismiss?: (insightId: string) => void
  onViewDetails?: (insightId: string) => void
}

const TypeConfig: Record<InsightType, { icon: any, color: string, bg: string, label: string }> = {
  stockout_risk: { 
    icon: Zap, 
    color: 'text-amber-600 dark:text-amber-400', 
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    label: 'High Velocity Alert'
  },
  dead_stock: { 
    icon: Clock, 
    color: 'text-red-600 dark:text-red-400', 
    bg: 'bg-red-100 dark:bg-red-900/30',
    label: 'Dead Stock'
  },
  seasonal: { 
    icon: TrendingUp, 
    color: 'text-green-600 dark:text-green-400', 
    bg: 'bg-green-100 dark:bg-green-900/30',
    label: 'Seasonal Trend'
  },
  pricing_opportunity: { 
    icon: DollarSign, 
    color: 'text-violet-600 dark:text-violet-400', 
    bg: 'bg-violet-100 dark:bg-violet-900/30',
    label: 'Margin Opportunity'
  }
}

export function InsightCard({ insight, onAction, onDismiss, onViewDetails }: InsightCardProps) {
  const [isDismissing, setIsDismissing] = useState(false)
  const config = TypeConfig[insight.type]
  const Icon = config.icon

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsDismissing(true)
    setTimeout(() => onDismiss?.(insight.id), 300) // Wait for animation
  }

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900",
        "hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1",
        isDismissing ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      )}
      onClick={() => onViewDetails?.(insight.id)}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 p-4 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-full", config.bg, config.color)}>
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {config.label}
            </p>
            <p className="text-xs text-zinc-400">
              {new Date(insight.dateCreated).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Hero Visual (Conditional) */}
      {insight.product?.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img 
            src={insight.product.imageUrl} 
            alt={insight.product.name}
            className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-heading text-lg font-bold">{insight.product.name}</p>
            <p className="font-mono text-sm opacity-90">Stock: {insight.product.currentStock} Units</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {!insight.product?.imageUrl && (
          <h3 className="mb-2 font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50">
            {insight.title}
          </h3>
        )}
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
          {insight.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2">
           <div className="h-1.5 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-800">
             <div 
              className={cn("h-full rounded-full transition-all duration-1000", config.bg.replace('/30', ''))} 
              style={{ width: `${insight.score * 100}%` }} 
             />
           </div>
           <span className="font-mono text-xs font-medium text-zinc-400">
             Confidence: {Math.round(insight.score * 100)}%
           </span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-3 bg-zinc-50 p-4 dark:bg-zinc-950/50">
        <Button 
          className={cn(
            "flex-1 font-semibold text-white shadow-lg transition-all hover:brightness-110", 
            insight.type === 'dead_stock' ? "bg-red-600 shadow-red-500/20" :
            insight.type === 'seasonal' ? "bg-green-600 shadow-green-500/20" :
            "bg-violet-600 shadow-violet-500/20"
          )}
          onClick={(e) => {
            e.stopPropagation()
            onAction?.(insight.id, insight.primaryAction)
          }}
        >
          {insight.primaryAction.label}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
