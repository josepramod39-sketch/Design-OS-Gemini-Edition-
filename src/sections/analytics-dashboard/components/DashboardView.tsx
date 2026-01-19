import React, { useState } from 'react'
import { Calendar, Download } from 'lucide-react'
import type { AnalyticsDashboardProps } from '@/../product/sections/analytics-dashboard/types'
import { KpiCard } from './KpiCard'
import { SalesChart } from './SalesChart'
import { TopMoversTable } from './TopMoversTable'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function DashboardView({
  kpiStats,
  salesTrends,
  categoryStats,
  topMovers,
  slowMovers,
  dateRange,
  onDateRangeChange,
  onViewFullReport
}: AnalyticsDashboardProps) {
  
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Analytics Dashboard
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Performance overview for <span className="font-medium text-violet-600 dark:text-violet-400">{dateRange === '7d' ? 'Last 7 Days' : dateRange === '30d' ? 'Last 30 Days' : 'Year to Date'}</span>.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Select 
            value={dateRange} 
            onValueChange={(val: any) => onDateRangeChange?.(val)}
          >
            <SelectTrigger className="w-[160px] bg-white dark:bg-zinc-900">
              <Calendar className="mr-2 h-4 w-4 text-zinc-500" />
              <SelectValue placeholder="Select Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" onClick={onViewFullReport} className="bg-white dark:bg-zinc-900">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard 
          label="Total Revenue" 
          value={kpiStats.monthlySales} 
          change={kpiStats.monthlySalesChange} 
          prefix="$"
        />
        <KpiCard 
          label="Stock Value" 
          value={kpiStats.totalStockValue} 
          change={kpiStats.totalStockValueChange} 
          prefix="$"
        />
        <KpiCard 
          label="Low Stock Items" 
          value={kpiStats.lowStockCount} 
          change={12} 
          suffix=""
        />
        <KpiCard 
          label="Dead Stock" 
          value={kpiStats.deadStockCount} 
          change={-5} 
          suffix=""
        />
      </div>

      {/* Main Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <SalesChart data={salesTrends} height={400} />
        </div>
        
        {/* Category Breakdown (Simple Bar Chart Visualization) */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 flex flex-col">
          <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-6">Sales by Category</h3>
          <div className="flex-1 space-y-5">
            {categoryStats.map((stat) => (
              <div key={stat.category}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{stat.category}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{stat.percentage}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div 
                    className="h-full bg-violet-500 rounded-full" 
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="mt-6 w-full text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20">
            View All Categories
          </Button>
        </div>
      </div>

      {/* Top/Slow Movers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopMoversTable title="Top Selling Products" items={topMovers} type="top" />
        <TopMoversTable title="Slow Moving / Dead Stock" items={slowMovers} type="slow" />
      </div>
    </div>
  )
}
