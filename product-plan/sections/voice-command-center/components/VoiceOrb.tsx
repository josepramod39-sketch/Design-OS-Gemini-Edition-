import React from 'react'
import { cn } from '@/lib/utils'

interface VoiceOrbProps {
  state: 'idle' | 'listening' | 'processing' | 'speaking'
}

export function VoiceOrb({ state }: VoiceOrbProps) {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center">
      {/* Core Orb */}
      <div 
        className={cn(
          "absolute h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 transition-all duration-500",
          state === 'listening' && "scale-110 shadow-[0_0_30px_rgba(139,92,246,0.6)]",
          state === 'processing' && "animate-pulse scale-90 shadow-[0_0_50px_rgba(217,70,239,0.8)]",
          state === 'speaking' && "scale-105 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
        )} 
      />
      
      {/* Outer Rings (Listening Animation) */}
      {state === 'listening' && (
        <>
          <div className="absolute h-full w-full animate-ping rounded-full border border-violet-500/30 opacity-20 duration-1000" />
          <div className="absolute h-24 w-24 animate-ping rounded-full border border-fuchsia-500/30 opacity-40 delay-150 duration-1000" />
        </>
      )}

      {/* Orbiting Particles (Processing Animation) */}
      {state === 'processing' && (
        <div className="absolute h-24 w-24 animate-spin-slow rounded-full border-t-2 border-white/50" />
      )}
    </div>
  )
}
