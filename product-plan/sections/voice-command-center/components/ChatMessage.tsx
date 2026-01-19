import React from 'react'
import { cn } from '@/lib/utils'
import type { ChatMessage as ChatMessageType } from '../types'
import { Badge } from '@/components/ui/badge'

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn("flex w-full animate-in slide-in-from-bottom-2 duration-300", isUser ? "justify-end" : "justify-start")}>
      <div 
        className={cn(
          "max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm",
          isUser 
            ? "bg-violet-600 text-white rounded-br-sm" 
            : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 rounded-bl-sm"
        )}
      >
        <p>{message.content}</p>

        {/* Attachment Renderer */}
        {message.attachment && message.attachment.type === 'product_status' && (
          <div className="mt-3 flex gap-3 rounded-xl border border-zinc-100 bg-zinc-50 p-3 dark:border-zinc-700 dark:bg-zinc-900/50">
            {message.attachment.data.imageUrl && (
              <img 
                src={message.attachment.data.imageUrl} 
                alt={message.attachment.data.name} 
                className="h-12 w-12 rounded-lg object-cover"
              />
            )}
            <div>
              <p className="font-bold text-zinc-900 dark:text-zinc-100">{message.attachment.data.name}</p>
              <div className="mt-1 flex items-center gap-2">
                <Badge variant={message.attachment.data.status === 'Low Stock' ? 'destructive' : 'outline'} className="text-[10px] h-5">
                  {message.attachment.data.status}
                </Badge>
                <span className="text-xs font-mono text-zinc-500">{message.attachment.data.stockCases} cs left</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
