# Test Instructions: Voice Command Center

## Overview
Test the voice overlay states (listening, processing) and the chat history rendering.

---

## User Flow Tests

### Flow 1: Ask a Question

**Scenario:** User triggers voice command and asks a question.

**Setup:**
- Overlay is open (`isOpen=true`).

**Steps:**
1. User clicks the Mic button.
2. UI state changes to 'listening' (Waveform appears).
3. (Mock speech end) UI state changes to 'processing' (Orb pulses).
4. (Mock response) New message appears in chat history.

**Expected Results:**
- [ ] `onStartListening` callback fired.
- [ ] Chat history updates with user message and then AI response.

---

### Flow 2: Use Suggestion Chip

**Scenario:** User clicks a quick suggestion.

**Steps:**
1. User clicks "Show low stock items" chip.

**Expected Results:**
- [ ] `onSelectSuggestion` callback is fired with the suggestion text.
- [ ] (Integration) This should trigger the same flow as speaking the command.

---

## Component Interaction Tests

### VoiceOverlay

**States:**
- [ ] 'idle': Shows "Tap to speak".
- [ ] 'listening': Shows Waveform component.
- [ ] 'processing': Shows pulsing VoiceOrb.

**Interactions:**
- [ ] Clicking 'X' or outside the modal fires `onClose`.
- [ ] Typing in the input and pressing Enter fires `onSendMessage`.
