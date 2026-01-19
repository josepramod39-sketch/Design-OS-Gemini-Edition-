import React, { useState } from 'react'
import { AppShell } from './components/AppShell'

export default function ShellPreview() {
  const [activePath, setActivePath] = useState('/inventory')

  const navigationItems = [
    { label: 'Inventory & Scanning', href: '/inventory', isActive: activePath === '/inventory' },
    { label: 'Analytics Dashboard', href: '/analytics', isActive: activePath === '/analytics' },
    { label: 'Predictive Insights', href: '/insights', isActive: activePath === '/insights' },
    { label: 'Voice Command', href: '/voice', isActive: activePath === '/voice' },
  ]

  const user = {
    name: 'Alex Morgan',
    email: 'alex@edithrp.com',
    avatarUrl: undefined,
  }

  return (
    <div className="font-sans antialiased text-zinc-900 dark:text-zinc-100">
      {/* Font imports for preview environment */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-heading: 'Space Grotesk', sans-serif;
          --font-mono: 'IBM Plex Mono', monospace;
        }
        
        .font-sans { font-family: var(--font-sans); }
        .font-heading { font-family: var(--font-heading); }
        .font-mono { font-family: var(--font-mono); }
      `}</style>

      <AppShell
        navigationItems={navigationItems}
        user={user}
        onNavigate={(href) => {
          console.log('Navigate to:', href)
          setActivePath(href)
        }}
        onLogout={() => console.log('Logout')}
        onVoiceTrigger={() => console.log('Voice Trigger Activated')}
      >
        <div className="rounded-lg border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-12 text-center">
          <h2 className="text-2xl font-bold font-heading text-zinc-900 dark:text-zinc-100 mb-4">
            {navigationItems.find(i => i.isActive)?.label}
          </h2>
          <p className="text-zinc-500 max-w-md mx-auto">
            This is where the section content will render. The shell provides the navigation 
            and global tools (like the voice trigger) around this area.
          </p>
        </div>
      </AppShell>
    </div>
  )
}
