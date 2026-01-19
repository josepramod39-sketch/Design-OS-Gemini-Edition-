import React from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import type { ProductPerformance } from '../types'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

interface TopMoversTableProps {
  title: string
  items: ProductPerformance[]
  type: 'top' | 'slow'
}

export function TopMoversTable({ title, items, type }: TopMoversTableProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
        <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[50%]">Product</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">{type === 'top' ? 'Sold' : 'Days Static'}</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
              <TableCell className="font-medium text-zinc-900 dark:text-zinc-100">
                {item.name}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="font-normal text-zinc-500 dark:text-zinc-400">
                  {item.category}
                </Badge>
              </TableCell>
              <TableCell className="text-right font-mono font-medium">
                {type === 'top' ? item.soldCount : item.daysInStock}
              </TableCell>
              <TableCell>
                {type === 'top' && item.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                {type === 'top' && item.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                {type === 'top' && item.trend === 'stable' && <Minus className="h-4 w-4 text-zinc-400" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
