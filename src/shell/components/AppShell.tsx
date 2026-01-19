import React from 'react'
import { MainNav } from './MainNav'
import { UserMenu } from './UserMenu'
import { Mic } from 'lucide-react'

interface AppShellProps {
  children: React.ReactNode
  navigationItems: Array<{ label: string; href: string; isActive?: boolean }>
  user?: { name: string; avatarUrl?: string }
  onNavigate?: (href: string) => void
  onLogout?: () => void
  onVoiceTrigger?: () => void
}

export function AppShell({
  children,
  navigationItems,
  user,
  onNavigate,
  onLogout,
  onVoiceTrigger,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-violet-100 dark:selection:bg-violet-900">
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold font-mono">E</span>
              </div>
              <span className="text-lg font-bold font-heading tracking-tight hidden sm:block">
                EdithRp
              </span>
            </div>
            
            <div className="hidden md:block">
              <MainNav items={navigationItems} onNavigate={onNavigate} />
            </div>
          </div>

          <div className="flex items-center gap-4">
             <button
              onClick={onVoiceTrigger}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-violet-900/30 dark:text-violet-400 dark:hover:bg-violet-900/50 transition-colors"
              aria-label="Voice Command"
            >
              <Mic className="h-5 w-5" />
            </button>

            <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
            
            <UserMenu user={user} onLogout={onLogout} />
          </div>
        </div>
        
        {/* Mobile Navigation (Simple generic implementation for preview) */}
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 px-4 py-2 overflow-x-auto">
           <MainNav items={navigationItems} onNavigate={onNavigate} mobile />
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
