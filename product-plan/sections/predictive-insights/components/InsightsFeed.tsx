import React from 'react'
import { Sparkles } from 'lucide-react'
import type { PredictiveInsightsProps } from '../types'
import { InsightCard } from './InsightCard'

export function InsightsFeed({
  insights,
  onAction,
  onDismiss,
  onViewDetails
}: PredictiveInsightsProps) {
  return (
    <div className="min-h-full w-full animate-in fade-in duration-500">
      <div className="mx-auto max-w-xl space-y-8 pb-12">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Predictive Insights
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            {insights.length} active recommendations for your business.
          </p>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {insights.map((insight) => (
            <InsightCard
              key={insight.id}
              insight={insight}
              onAction={onAction}
              onDismiss={onDismiss}
              onViewDetails={onViewDetails}
            />
          ))}
          
          {insights.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 py-12 text-center dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-zinc-400">No new insights right now.</p>
              <p className="text-sm text-zinc-500">Check back after your next inventory scan.</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
          <Sparkles className="h-3 w-3" />
          <span>Powered by Gemini AI</span>
        </div>
      </div>
    </div>
  )
}
