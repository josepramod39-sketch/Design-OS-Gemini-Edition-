export interface Supplier {
  id: string
  name: string
  repName?: string
  route?: string
  stop?: string
}

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

export interface Inventory {
  id: string
  productId: string
  stockCases: number
  stockBottles: number
  lastUpdated: string
  status: 'In Stock' | 'Low Stock' | 'Critical' | 'Out of Stock'
}

export interface Invoice {
  id: string
  poNumber: string
  supplierId: string
  date: string
  dueDate: string
  totalAmount: number
  status: 'pending' | 'processed' | 'paid'
}

export interface InvoiceItem {
  id: string
  invoiceId: string
  productId: string
  caseCount: number
  bottleCount: number
  unitCost: number
  extendedAmount: number
}

export interface Insight {
  id: string
  type: string
  title: string
  description: string
  score: number
  actionType: string
  actionPayload: any
}
