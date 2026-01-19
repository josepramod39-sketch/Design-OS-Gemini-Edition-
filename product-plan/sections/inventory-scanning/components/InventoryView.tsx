import React, { useState } from 'react'
import { Camera, Upload, Search, Filter, Mic } from 'lucide-react'
import type { InventoryScanningProps } from '../types'
import { InventoryCard } from './InventoryCard'
import { ReviewModal } from './ReviewModal'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function InventoryView({
  inventory,
  pendingInvoice,
  onScanCamera,
  onScanUpload,
  onSearch,
  onVoiceSearch,
  onViewDetails,
  onConfirmInvoice,
  onDiscardInvoice,
  onUpdateStock,
}: InventoryScanningProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    onSearch?.(e.target.value)
  }

  // Calculate quick stats
  const totalItems = inventory.length
  const lowStockCount = inventory.filter(i => i.status === 'Low Stock').length
  const criticalCount = inventory.filter(i => i.status === 'Critical' || i.status === 'Out of Stock').length

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header & Actions */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Inventory & Scanning
          </h1>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-lg">
            Manage your stock levels, process new invoices, and track inventory health.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            onClick={onScanUpload}
            variant="outline" 
            className="h-11 border-dashed border-zinc-300 dark:border-zinc-700"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Invoice
          </Button>
          <Button 
            onClick={onScanCamera}
            className="h-11 bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20"
          >
            <Camera className="mr-2 h-4 w-4" />
            Scan New
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total SKUs</p>
          <p className="mt-2 font-mono text-3xl font-bold text-zinc-900 dark:text-zinc-100">{totalItems}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Low Stock</p>
          <p className="mt-2 font-mono text-3xl font-bold text-amber-500">{lowStockCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Critical/Out</p>
          <p className="mt-2 font-mono text-3xl font-bold text-red-500">{criticalCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
           <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Pending Review</p>
           <p className="mt-2 font-mono text-3xl font-bold text-violet-500">{pendingInvoice ? 1 : 0}</p>
        </div>
      </div>

      <Separator className="bg-zinc-200 dark:bg-zinc-800" />

      {/* Filters & Grid */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              placeholder="Search by name, UPC, or category..."
              className="pl-10 h-11 bg-white dark:bg-zinc-900"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button 
              onClick={onVoiceSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              <Mic className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
             <Select defaultValue="all">
              <SelectTrigger className="w-[160px] h-11 bg-white dark:bg-zinc-900">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="low">Low Stock</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="instock">In Stock</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="h-11 w-11 bg-white dark:bg-zinc-900">
              <Filter className="h-4 w-4 text-zinc-500" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {inventory.map((item) => (
            <InventoryCard
              key={item.id}
              item={item}
              onClick={() => onViewDetails?.(item.id)}
              onEditStock={() => onUpdateStock?.(item.id, item.stockCases, item.stockBottles)}
            />
          ))}
        </div>
      </div>

      {/* Modals */}
      <ReviewModal 
        invoice={pendingInvoice}
        open={!!pendingInvoice}
        onConfirm={(inv) => onConfirmInvoice?.(inv)}
        onDiscard={() => onDiscardInvoice?.()}
      />
    </div>
  )
}
