import React, { useState } from 'react'
import data from '@/../product/sections/voice-command-center/data.json'
import type { ChatMessage } from '@/../product/sections/voice-command-center/types'
import { VoiceOverlay } from './components/VoiceOverlay'
import { Button } from '@/components/ui/button'

// Cast data
const initialHistory = data.chatHistory as any

export default function VoicePreview() {
  const [isOpen, setIsOpen] = useState(true)
  const [state, setState] = useState<'idle' | 'listening' | 'processing' | 'speaking'>('idle')
  const [history, setHistory] = useState<ChatMessage[]>(initialHistory)
  const [transcript, setTranscript] = useState('')

  const simulateVoiceInteraction = () => {
    setState('listening')
    setTranscript('Checking stock for...')
    
    setTimeout(() => {
      setTranscript('Checking stock for Hendrick\'s')
    }, 1000)

    setTimeout(() => {
      setState('processing')
      setTranscript('')
    }, 2000)

    setTimeout(() => {
      setState('idle')
      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "Hendrick's Gin is critical. Only 2 bottles remaining.",
        timestamp: new Date().toISOString(),
        attachment: {
          type: 'product_status',
          data: {
             name: "Hendrick's Gin",
             imageUrl: "https://placehold.co/400x600/2a2a2a/white?text=Hendricks+Gin",
             stockCases: 0,
             stockBottles: 2,
             status: 'Critical'
          }
        }
      }
      setHistory(prev => [...prev, newMsg])
    }, 3500)
  }

  const handleSendMessage = (text: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    }
    setHistory(prev => [...prev, userMsg])
    
    // Simulate simple response
    setTimeout(() => {
       const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I received your command: "${text}". In a real app, I'd process this query.`, 
        timestamp: new Date().toISOString()
      }
      setHistory(prev => [...prev, aiMsg])
    }, 1000)
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-100 dark:bg-zinc-900 p-4">
      <div className="text-center">
        <h1 className="mb-2 text-2xl font-bold">Voice Command Center Preview</h1>
        <p className="text-zinc-500">Tap the button below to open the overlay.</p>
      </div>
      
      <Button size="lg" onClick={() => setIsOpen(true)}>
        Open Voice Assistant
      </Button>

      <VoiceOverlay
        isOpen={isOpen}
        state={state}
        history={history}
        suggestions={data.suggestions}
        transcript={transcript}
        onClose={() => setIsOpen(false)}
        onStartListening={simulateVoiceInteraction}
        onSelectSuggestion={(s) => handleSendMessage(s)}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}
