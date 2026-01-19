# Test Instructions: Predictive Insights

## Overview
Test the feed interactions, dismissal logic, and action triggering.

---

## User Flow Tests

### Flow 1: Act on an Insight

**Scenario:** User accepts a reorder suggestion.

**Setup:**
- Feed has at least one "Stockout Risk" insight.

**Steps:**
1. User clicks "Reorder 10 Cases" button on the first card.

**Expected Results:**
- [ ] `onAction` callback is fired with the action payload (type: 'reorder').
- [ ] (Integration) Insight should be marked as resolved/archived.

---

### Flow 2: Dismiss an Insight

**Scenario:** User ignores a suggestion.

**Steps:**
1. User clicks the "X" button on a card.

**Expected Results:**
- [ ] Card animates away (slide out).
- [ ] `onDismiss` callback is fired with the insight ID.

---

## Empty State Tests

### No Insights

**Scenario:** All insights resolved or none generated yet.

**Setup:**
- `insights` is `[]`.

**Expected Results:**
- [ ] "No new insights" message is visible.
- [ ] "Powered by Gemini AI" footer is still visible.

---

## Component Interaction Tests

### InsightCard

**Visuals:**
- [ ] Displays correct icon for the type (Zap for stockout, Clock for dead stock).
- [ ] Shows confidence score bar.
