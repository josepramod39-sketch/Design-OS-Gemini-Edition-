// =============================================================================
// Data Types
// =============================================================================

export interface KpiStats {
  totalStockValue: number
  totalStockValueChange: number // Percentage change (positive or negative)
  monthlySales: number
  monthlySalesChange: number // Percentage change
  lowStockCount: number
  deadStockCount: number
}

export interface SalesTrend {
  date: string
  revenue: number
  cost: number
}

export interface CategoryStat {
  category: string
  sales: number
  percentage: number
}

export interface ProductPerformance {
  id: string
  name: string
  category: string
  soldCount: number
  trend?: 'up' | 'down' | 'stable'
  daysInStock?: number // For slow movers
}

// =============================================================================
// Component Props
// =============================================================================

export interface AnalyticsDashboardProps {
  /** High-level metrics for the top cards */
  kpiStats: KpiStats
  
  /** Daily data for the main chart */
  salesTrends: SalesTrend[]
  
  /** Category breakdown data */
  categoryStats: CategoryStat[]
  
  /** List of best selling items */
  topMovers: ProductPerformance[]
  
  /** List of slow moving / dead stock items */
  slowMovers: ProductPerformance[]

  /** Selected date range filter */
  dateRange: '7d' | '30d' | 'ytd'

  /** Called when user changes the date range filter */
  onDateRangeChange?: (range: '7d' | '30d' | 'ytd') => void

  /** Called when user clicks "View Report" or similar */
  onViewFullReport?: () => void
}
