# Milestone 5: Voice Command Center

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 4 complete

---

## Goal

Implement the Voice Command Center — Search for products and query stock status using natural voice commands.

## Overview

A sophisticated natural language interface for EdithRp. It provides an overlay-based chat experience where users can query stock, analyze sales, and trigger actions using voice.

**Key Functionality:**
- Activate voice listening via UI
- Transcribe speech to text
- Process natural language intent (LLM integration)
- Return rich structured data (Product cards, stats) in the chat

## Recommended Approach: Test-Driven Development

See `product-plan/sections/voice-command-center/tests.md`.

## What to Implement

### Components

Copy from `product-plan/sections/voice-command-center/components/`:

- `VoiceOverlay`
- `VoiceOrb`
- `ChatMessage`

### Data Layer

- `ChatMessage`

You'll need to:
- Integrate a Speech-to-Text API (e.g., OpenAI Whisper, Google STT, or browser native API)
- Integrate an LLM (e.g., Gemini) to interpret the intent:
    - "Check stock for X" -> SQL Query -> Return Product
    - "How were sales?" -> SQL Query -> Return Stats
- Manage conversation state

## Done When

- [ ] Tests written and passing
- [ ] Mic button triggers listening state
- [ ] Speech is transcribed correctly
- [ ] AI understands intent and queries the database
- [ ] Rich results (stock cards) appear in the chat bubble
