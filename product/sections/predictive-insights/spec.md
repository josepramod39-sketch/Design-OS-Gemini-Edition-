# Predictive Insights Specification

## Overview
An intelligent "feed" of actionable business recommendations. It presents AI-driven insights (reorders, discounts, seasonal trends) in a modern, Instagram-style card format, allowing users to make high-impact decisions with single-tap actions.

## User Flows
- **View Insight Feed:** User scrolls through a vertical feed of "Insight Cards," each addressing a specific opportunity or risk.
- **Act on Insight:** User clicks a primary action button (e.g., "Reorder", "Discount") on a card to execute the suggestion.
- **Dismiss/Archive:** User dismisses an insight they don't want to act on, removing it from the feed.
- **Drill Down:** User clicks the card body to see more data backing the insight (e.g., a mini sales chart).

## UI Requirements
- **Feed Layout:** A centered, focused column of cards (max-width constrained for readability).
- **Insight Card Structure:**
    - **Header:** Icon + Alert Type (e.g., "Stockout Risk").
    - **Visual:** Product image or mini-chart.
    - **Content:** Headline and AI explanation ("Why this is happening").
    - **Action Bar:** Prominent primary action button and secondary "Dismiss" button.
- **Interaction:** Smooth animations when cards are completed/dismissed.

## Configuration
- shell: true
