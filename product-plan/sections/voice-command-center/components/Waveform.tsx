import React from 'react'
import { cn } from '@/lib/utils'

interface WaveformProps {
  active: boolean
}

export function Waveform({ active }: WaveformProps) {
  return (
    <div className="flex h-12 items-center gap-1">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 rounded-full bg-zinc-400 transition-all duration-150 dark:bg-zinc-600",
            active ? "animate-waveform bg-violet-500" : "h-1"
          )}
          style={{
            height: active ? `${Math.random() * 24 + 8}px` : '4px',
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}
    </div>
  )
}
