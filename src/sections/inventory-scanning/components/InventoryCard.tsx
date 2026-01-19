import React from 'react'
import { MoreHorizontal, Package, AlertCircle, CheckCircle2 } from 'lucide-react'
import type { InventoryItem } from '@/../product/sections/inventory-scanning/types'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface InventoryCardProps {
  item: InventoryItem
  onClick?: () => void
  onEditStock?: () => void
}

export function InventoryCard({ item, onClick, onEditStock }: InventoryCardProps) {
  const isLowStock = item.status === 'Low Stock' || item.status === 'Critical' || item.status === 'Out of Stock'
  const isCritical = item.status === 'Critical' || item.status === 'Out of Stock'

  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-700"
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
            {item.product.imageUrl ? (
              <img 
                src={item.product.imageUrl} 
                alt={item.product.description}
                className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-400">
                <Package className="h-6 w-6" />
              </div>
            )}
            {isCritical && (
              <div className="absolute inset-0 bg-red-500/10 ring-1 ring-inset ring-red-500/20" />
            )}
          </div>
          
          <div>
            <h3 className="font-heading text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-100 line-clamp-2">
              {item.product.description}
            </h3>
            <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400">
              UPC: {item.product.upc} • {item.product.size}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" size="icon" className="-mr-2 -mt-2 h-8 w-8 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onEditStock?.() }}>
              Adjust Stock
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
              View History
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-6 flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">In Stock</p>
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "font-mono text-2xl font-bold",
              isCritical ? "text-red-600 dark:text-red-400" : "text-zinc-900 dark:text-zinc-100"
            )}>
              {item.stockCases}
            </span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">cs</span>
            <span className="text-zinc-300 dark:text-zinc-700">/</span>
            <span className={cn(
              "font-mono text-xl",
              isCritical ? "text-red-600 dark:text-red-400" : "text-zinc-700 dark:text-zinc-300"
            )}>
              {item.stockBottles}
            </span>
            <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">btl</span>
          </div>
        </div>

        <div className="text-right">
           <Badge 
            variant={isCritical ? "destructive" : isLowStock ? "secondary" : "outline"}
            className={cn(
              "mb-2",
              !isLowStock && "border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            )}
          >
            {item.status}
          </Badge>
          <p className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100">
            ${item.product.price.toFixed(2)}
          </p>
        </div>
      </div>
      
      {/* Progress bar for visual stock indication */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-100 dark:bg-zinc-800">
        <div 
          className={cn(
            "h-full transition-all duration-500",
            isCritical ? "bg-red-500" : isLowStock ? "bg-amber-500" : "bg-emerald-500"
          )}
          style={{ width: `${Math.min(((item.stockCases * item.product.pack + item.stockBottles) / (item.product.pack * 5)) * 100, 100)}%` }}
        />
      </div>
    </div>
  )
}
