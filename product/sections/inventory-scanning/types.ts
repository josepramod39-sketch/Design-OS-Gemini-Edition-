// =============================================================================
// Data Types
// =============================================================================

export interface Product {
  id: string
  upc: string
  description: string
  size: string
  pack: number
  price: number
  category: string
  imageUrl?: string
}

export interface InventoryItem {
  id: string
  productId: string
  stockCases: number
  stockBottles: number
  lastUpdated: string
  status: 'In Stock' | 'Low Stock' | 'Critical' | 'Out of Stock'
  product: Product
}

export interface PendingInvoiceItem {
  productId?: string // Optional as AI might not match it immediately
  description: string
  caseCount: number
  bottleCount: number
  unitCost: number
  discount: number
  extendedAmount: number
  confidenceScore: number // 0 to 1, indicates AI confidence
}

export interface PendingInvoice {
  id: string
  poNumber: string
  supplierName: string
  scanDate: string
  dueDate: string
  paymentTerms: string
  specialInstructions?: string
  route?: string
  stop?: string
  totalAmount: number
  confidenceScore: number
  items: PendingInvoiceItem[]
}

// =============================================================================
// Component Props
// =============================================================================

export interface InventoryScanningProps {
  /** The full list of inventory items to display */
  inventory: InventoryItem[]
  
  /** A pending invoice scan result, if one is currently being reviewed */
  pendingInvoice?: PendingInvoice

  /** Called when user triggers the camera */
  onScanCamera?: () => void

  /** Called when user uploads an image file */
  onScanUpload?: () => void

  /** Called when user searches or filters the list */
  onSearch?: (query: string) => void

  /** Called when user activates voice search */
  onVoiceSearch?: () => void

  /** Called when user clicks a card to view/edit details */
  onViewDetails?: (itemId: string) => void

  /** Called when user confirms a pending invoice scan */
  onConfirmInvoice?: (invoice: PendingInvoice) => void

  /** Called when user cancels/discards a pending invoice scan */
  onDiscardInvoice?: () => void

  /** Called when user manually updates stock on an item */
  onUpdateStock?: (itemId: string, newCases: number, newBottles: number) => void
}
