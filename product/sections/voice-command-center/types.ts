// =============================================================================
// Data Types
// =============================================================================

export type MessageRole = 'user' | 'assistant'

export interface ProductStatusAttachment {
  type: 'product_status'
  data: {
    name: string
    imageUrl?: string
    stockCases: number
    stockBottles: number
    status: 'In Stock' | 'Low Stock' | 'Critical' | 'Out of Stock'
  }
}

// Union type for future extensibility (e.g., charts, lists)
export type ChatAttachment = ProductStatusAttachment

export interface ChatMessage {
  id: string
  role: MessageRole
  content: string
  timestamp: string
  attachment?: ChatAttachment
}

// =============================================================================
// Component Props
// =============================================================================

export interface VoiceCommandCenterProps {
  /** Whether the voice interface is currently visible */
  isOpen: boolean

  /** The current state of the voice engine */
  state: 'idle' | 'listening' | 'processing' | 'speaking'

  /** The conversation history to display */
  history: ChatMessage[]

  /** Quick suggestion chips */
  suggestions: string[]

  /** The current live transcript while listening */
  transcript?: string

  /** Called when user closes the overlay */
  onClose?: () => void

  /** Called when user taps the mic to start listening manually */
  onStartListening?: () => void

  /** Called when user taps a suggestion chip */
  onSelectSuggestion?: (suggestion: string) => void

  /** Called when user sends a text message (fallback input) */
  onSendMessage?: (text: string) => void
}
