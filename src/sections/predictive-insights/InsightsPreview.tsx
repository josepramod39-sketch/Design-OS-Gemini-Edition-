import React, { useState } from 'react'
import data from '@/../product/sections/predictive-insights/data.json'
import type { Insight } from '@/../product/sections/predictive-insights/types'
import { InsightsFeed } from './components/InsightsFeed'

// Cast data
const initialInsights = data.insights as Insight[]

export default function InsightsPreview() {
  const [insights, setInsights] = useState<Insight[]>(initialInsights)

  const handleDismiss = (id: string) => {
    console.log('Dismissing insight:', id)
    // In a real app, this would call the API.
    // For preview, we remove it from state to show the animation.
    setInsights(prev => prev.filter(i => i.id !== id))
  }

  const handleAction = (id: string, action: any) => {
    console.log('Executing action:', action)
    alert(`Action Triggered: ${action.label}`)
    // Typically, acting on an insight also resolves/dismisses it
    handleDismiss(id)
  }

  return (
    <InsightsFeed
      insights={insights}
      onAction={handleAction}
      onDismiss={handleDismiss}
      onViewDetails={(id) => console.log('View details:', id)}
    />
  )
}
