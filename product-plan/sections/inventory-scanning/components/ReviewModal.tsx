import React from 'react'
import { X, Check, AlertTriangle, FileText, ArrowRight } from 'lucide-react'
import type { PendingInvoice } from '../types'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

interface ReviewModalProps {
  invoice: PendingInvoice | undefined
  open: boolean
  onConfirm: (invoice: PendingInvoice) => void
  onDiscard: () => void
}

export function ReviewModal({ invoice, open, onConfirm, onDiscard }: ReviewModalProps) {
  if (!invoice) return null

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onDiscard()}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <DialogTitle className="font-heading text-xl">Review Scanned Invoice</DialogTitle>
              <DialogDescription>
                AI extracted {invoice.items.length} items with {Math.round(invoice.confidenceScore * 100)}% confidence.
              </DialogDescription>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm">
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">Supplier</span>
              <span className="font-medium">{invoice.supplierName}</span>
            </div>
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">P.O. #</span>
              <span className="font-mono">{invoice.poNumber}</span>
            </div>
             <div>
              <span className="block text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">Due Date</span>
              <span className="font-medium">{new Date(invoice.dueDate).toLocaleDateString()}</span>
            </div>
            <div>
              <span className="block text-zinc-500 dark:text-zinc-400 text-xs uppercase tracking-wider">Total</span>
              <span className="font-mono font-bold text-violet-600 dark:text-violet-400">${invoice.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 bg-zinc-50 dark:bg-zinc-950 p-6">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
            <Table>
              <TableHeader className="bg-zinc-50 dark:bg-zinc-950/50">
                <TableRow>
                  <TableHead className="w-[40%]">Description</TableHead>
                  <TableHead className="text-right">Cases</TableHead>
                  <TableHead className="text-right">Bottles</TableHead>
                  <TableHead className="text-right">Cost</TableHead>
                  <TableHead className="text-right">Ext</TableHead>
                  <TableHead className="w-[100px]">Confidence</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoice.items.map((item, index) => (
                  <TableRow key={index} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                    <TableCell className="font-medium">
                      {item.description}
                      {item.discount > 0 && (
                        <span className="ml-2 inline-flex items-center rounded-sm bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20">
                          -${item.discount}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-mono text-zinc-600 dark:text-zinc-400">{item.caseCount}</TableCell>
                    <TableCell className="text-right font-mono text-zinc-600 dark:text-zinc-400">{item.bottleCount}</TableCell>
                    <TableCell className="text-right font-mono text-zinc-600 dark:text-zinc-400">${item.unitCost.toFixed(2)}</TableCell>
                    <TableCell className="text-right font-mono font-medium">${item.extendedAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      {item.confidenceScore < 0.9 && (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900/30 dark:text-amber-400">
                          <AlertTriangle className="mr-1 h-3 w-3" />
                          {Math.round(item.confidenceScore * 100)}%
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </ScrollArea>

        <DialogFooter className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <Button variant="outline" onClick={onDiscard}>
            <X className="mr-2 h-4 w-4" />
            Discard
          </Button>
          <Button onClick={() => onConfirm(invoice)} className="bg-violet-600 hover:bg-violet-700 text-white">
            <Check className="mr-2 h-4 w-4" />
            Confirm & Update Inventory
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
