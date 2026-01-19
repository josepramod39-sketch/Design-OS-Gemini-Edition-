# Voice Command Center

## Overview
A sophisticated natural language interface for EdithRp. It provides an overlay-based chat experience where users can query stock, analyze sales, and trigger actions using voice.

## User Flows
- **Trigger Interface:** User taps the global microphone button in the header to open the Voice Command overlay.
- **Voice Query:** User speaks a command (e.g., "Check stock for Jack Daniels"). Interface shows live waveforms while listening.
- **AI Processing:** Interface shows a pulsing orb while Gemini processes the query.
- **View Results:** AI responds with text and/or interactive data cards within the chat-style history.
- **Continue Conversation:** User can ask follow-up questions in a threaded chat interface.

## Design Decisions
- Glassmorphism overlay for modern, contextual feel.
- Voice Orb and Waveform animations for immediate feedback.
- Rich chat bubbles to display data (not just text).

## Data Used
- ChatMessage
- ProductStatusAttachment

## Components Provided
- `VoiceOverlay`
- `VoiceOrb`
- `Waveform`
- `ChatMessage`

## Callback Props
See `types.ts` for full list.
