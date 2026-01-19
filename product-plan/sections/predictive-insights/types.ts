// =============================================================================
// Data Types
// =============================================================================

export type InsightType = 'stockout_risk' | 'dead_stock' | 'seasonal' | 'pricing_opportunity'

export interface ProductContext {
  id: string
  name: string
  imageUrl?: string
  currentStock: number
}

export interface InsightAction {
  label: string
  actionType: 'reorder' | 'discount' | 'view_list' | 'update_price'
  payload: Record<string, any>
}

export interface Insight {
  id: string
  type: InsightType
  title: string
  description: string
  score: number // Confidence score 0-1
  dateCreated: string
  primaryAction: InsightAction
  product?: ProductContext
}

// =============================================================================
// Component Props
// =============================================================================

export interface PredictiveInsightsProps {
  /** The feed of insights to display */
  insights: Insight[]

  /** Called when user clicks the primary action button on a card */
  onAction?: (insightId: string, action: InsightAction) => void

  /** Called when user dismisses/archives an insight */
  onDismiss?: (insightId: string) => void

  /** Called when user clicks the card body to drill down */
  onViewDetails?: (insightId: string) => void
}
