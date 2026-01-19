import React, { useState } from 'react'
import data from '@/../product/sections/analytics-dashboard/data.json'
import { DashboardView } from './components/DashboardView'
import type { AnalyticsDashboardProps } from '@/../product/sections/analytics-dashboard/types'

// Cast data to correct types
const kpiStats = data.kpiStats as AnalyticsDashboardProps['kpiStats']
const salesTrends = data.salesTrends as AnalyticsDashboardProps['salesTrends']
const categoryStats = data.categoryStats as AnalyticsDashboardProps['categoryStats']
const topMovers = data.topMovers as any // rough cast
const slowMovers = data.slowMovers as any

export default function DashboardPreview() {
  const [dateRange, setDateRange] = useState<'7d' | '30d' | 'ytd'>('30d')

  return (
    <DashboardView
      kpiStats={kpiStats}
      salesTrends={salesTrends}
      categoryStats={categoryStats}
      topMovers={topMovers}
      slowMovers={slowMovers}
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      onViewFullReport={() => console.log('Export full report')}
    />
  )
}
