import React, { useRef, useEffect } from 'react'
import { X, Mic, Send, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { VoiceCommandCenterProps } from '@/../product/sections/voice-command-center/types'
import { VoiceOrb } from './VoiceOrb'
import { Waveform } from './Waveform'
import { ChatMessage } from './ChatMessage'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

export function VoiceOverlay({
  isOpen,
  state,
  history,
  suggestions,
  transcript,
  onClose,
  onStartListening,
  onSelectSuggestion,
  onSendMessage
}: VoiceCommandCenterProps) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const [inputValue, setInputValue] = React.useState('')

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, transcript])

  if (!isOpen) return null

  const handleSend = () => {
    if (!inputValue.trim()) return
    onSendMessage?.(inputValue)
    setInputValue('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative flex h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-violet-600">
               <Mic className="h-3 w-3 text-white" />
            </div>
            <span className="font-heading font-bold text-zinc-900 dark:text-zinc-50">Edith AI</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 rounded-full">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="relative flex-1 bg-zinc-50/50 dark:bg-zinc-900/50">
          <ScrollArea className="h-full px-6 py-6">
            <div className="flex flex-col gap-4 pb-24">
              {history.length === 0 && (
                <div className="mt-8 text-center">
                  <p className="text-zinc-500">I'm ready to help. Try asking:</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => onSelectSuggestion?.(suggestion)}
                        className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-violet-400"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {history.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}

              {/* Live Transcript / Listening State */}
              {state === 'listening' && (
                <div className="flex flex-col items-center justify-center py-8 animate-in fade-in">
                  <p className="mb-4 text-lg font-medium text-zinc-700 dark:text-zinc-300">
                    {transcript || "Listening..."}
                  </p>
                  <Waveform active={true} />
                </div>
              )}

              {/* Processing State */}
              {state === 'processing' && (
                <div className="flex justify-center py-8">
                  <VoiceOrb state="processing" />
                </div>
              )}
              
               <div ref={bottomRef} />
            </div>
          </ScrollArea>
        </div>

        {/* Footer / Input */}
        <div className="border-t border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex items-center gap-2">
            <Button 
              size="icon" 
              className={cn(
                "h-12 w-12 shrink-0 rounded-full shadow-md transition-all",
                state === 'listening' ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-violet-600 hover:bg-violet-700"
              )}
              onClick={onStartListening}
            >
              <Mic className="h-5 w-5 text-white" />
            </Button>
            
            <div className="relative flex-1">
              <Input 
                placeholder="Type a command..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="h-12 rounded-full border-zinc-200 pl-5 pr-12 focus-visible:ring-violet-500 dark:border-zinc-800 dark:bg-zinc-900"
              />
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={handleSend}
                className="absolute right-1 top-1 h-10 w-10 rounded-full text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-900/20"
                disabled={!inputValue.trim()}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
