import React from 'react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  items: NavItem[]
  onNavigate?: (href: string) => void
  mobile?: boolean
}

export function MainNav({ items, onNavigate, mobile = false }: MainNavProps) {
  return (
    <nav className={cn("flex", mobile ? "gap-2" : "gap-6")}>
      {items.map((item) => (
        <button
          key={item.href}
          onClick={() => onNavigate?.(item.href)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-violet-600 dark:hover:text-violet-400 whitespace-nowrap",
            item.isActive
              ? "text-violet-600 dark:text-violet-400 font-semibold"
              : "text-zinc-600 dark:text-zinc-400",
             mobile && "py-2 px-3 rounded-md bg-zinc-100 dark:bg-zinc-900"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
