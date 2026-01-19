import React, { useState } from 'react'
import data from '@/../product/sections/inventory-scanning/data.json'
import type { PendingInvoice } from '@/../product/sections/inventory-scanning/types'
import { InventoryView } from './components/InventoryView'

// Cast the data to the correct types
const initialInventory = data.inventory as any
const samplePendingInvoice = data.pendingInvoice as any

export default function InventoryPreview() {
  const [showPendingInvoice, setShowPendingInvoice] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  // Simple client-side search for preview
  const filteredInventory = initialInventory.filter((item: any) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      item.product.description.toLowerCase().includes(q) ||
      item.product.upc.includes(q) ||
      item.product.category.toLowerCase().includes(q)
    )
  })

  return (
    <InventoryView
      inventory={filteredInventory}
      pendingInvoice={showPendingInvoice ? samplePendingInvoice : undefined}
      onScanCamera={() => {
        console.log('Camera triggered')
        // Simulate a scan completing after 1.5s
        setTimeout(() => setShowPendingInvoice(true), 1500)
      }}
      onScanUpload={() => {
        console.log('Upload triggered')
        setTimeout(() => setShowPendingInvoice(true), 1000)
      }}
      onSearch={(q) => setSearchQuery(q)}
      onVoiceSearch={() => console.log('Voice search triggered')}
      onViewDetails={(id) => console.log('View details:', id)}
      onConfirmInvoice={(inv) => {
        console.log('Confirmed invoice:', inv)
        setShowPendingInvoice(false)
      }}
      onDiscardInvoice={() => {
        console.log('Discarded invoice')
        setShowPendingInvoice(false)
      }}
      onUpdateStock={(id, cases, bottles) => console.log('Update stock:', id, cases, bottles)}
    />
  )
}
