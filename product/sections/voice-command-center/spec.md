# Voice Command Center Specification

## Overview
A sophisticated natural language interface for EdithRp. It provides an overlay-based chat experience where users can query stock, analyze sales, and trigger actions using voice.

## User Flows
- **Trigger Interface:** User taps the global microphone button in the header to open the Voice Command overlay.
- **Voice Query:** User speaks a command (e.g., "Check stock for Jack Daniels"). Interface shows live waveforms while listening.
- **AI Processing:** Interface shows a pulsing orb while Gemini processes the query.
- **View Results:** AI responds with text and/or interactive data cards within the chat-style history.
- **Continue Conversation:** User can ask follow-up questions in a threaded chat interface.

## UI Requirements
- **Overlay Component:** A glassmorphism-style modal with background blur.
- **Listening State:** Real-time animated audio waveforms.
- **Processing State:** A central, pulsing AI orb with violet/fuchsia gradients.
- **Chat History:** Threaded bubbles for user speech and system responses.
- **Quick Commands:** Suggestion chips (e.g., "Show low stock", "Monthly sales") to help users get started.

## Configuration
- shell: true
